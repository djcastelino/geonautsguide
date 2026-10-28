import { createSpeechBlob } from '../services/backend';
import { useEffect, useRef, useState } from 'react';
import { BookOpen, MapPin, ExternalLink, Bot, RotateCcw, AlertCircle, Volume2, VolumeX, Pause } from 'lucide-react';

export default function ViewerScreen({ data, onReset }) {
  const streetViewRef = useRef(null);
  const [streetViewAvailable, setStreetViewAvailable] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const utteranceRef = useRef(null);
  const backgroundMusicRef = useRef(null);
  const audioContextRef = useRef(null);
  const [musicReady, setMusicReady] = useState(false);

  // Preload background music on component mount
  useEffect(() => {
    // Using a reliable, lightweight ambient track
    const music = new Audio('https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3');
    music.loop = true;
    music.volume = 0.1;
    music.preload = 'auto';
    music.crossOrigin = 'anonymous';
    
    music.addEventListener('canplaythrough', () => {
      console.log('✅ Background music ready');
      setMusicReady(true);
    });
    
    music.addEventListener('error', (e) => {
      console.error('❌ Background music error:', e);
    });
    
    backgroundMusicRef.current = music;
    
    return () => {
      if (music) {
        music.pause();
        music.src = '';
      }
    };
  }, []);

  useEffect(() => {
    const loadStreetView = () => {
      if (typeof window.google === 'undefined') {
        console.log('Google Maps API not loaded yet');
        return;
      }
      
      if (streetViewRef.current) {
        console.log('Loading Street View for:', data.lat, data.lng);
        
        // Clear any existing content
        streetViewRef.current.innerHTML = '';
        
        // Check Street View availability first
        const streetViewService = new window.google.maps.StreetViewService();
        streetViewService.getPanorama(
          { location: { lat: data.lat, lng: data.lng }, radius: 100 },
          (panoData, status) => {
            if (status === 'OK' && panoData) {
              setStreetViewAvailable(true);
              
              new window.google.maps.StreetViewPanorama(streetViewRef.current, {
                position: panoData.location.latLng,
                pov: { heading: 100, pitch: 10 },
                zoom: 1,
                addressControl: true,
                linksControl: true,
                panControl: true,
                enableCloseButton: false,
                fullscreenControl: true,
                visible: true
              });
              
              console.log('Street View loaded successfully');
            } else {
              console.warn('Street View not available for this location');
              setStreetViewAvailable(false);
            }
          }
        );
      }
    };

    if (window.google) {
      loadStreetView();
    } else {
      console.log('Waiting for Google Maps API...');
      const checkInterval = setInterval(() => {
        if (window.google) {
          loadStreetView();
          clearInterval(checkInterval);
        }
      }, 500);
      return () => clearInterval(checkInterval);
    }
  }, [data]);

  // TTS Audio Functions with On-Demand Google Cloud TTS
  const handlePlayAudio = async () => {
    // Resume if paused
    if (isPaused && utteranceRef.current) {
      utteranceRef.current.play();
      setIsPaused(false);
      setIsPlaying(true);
      return;
    }

    // If we already have cached audio, play it
    if (utteranceRef.current) {
      utteranceRef.current.currentTime = 0;
      utteranceRef.current.play();
      return;
    }

    // Generate Google TTS on-demand with voice variety
    try {
      console.log('Generating Google TTS audio on-demand...');
      setIsPlaying(true); // Show loading state
      
      // Randomly select voice for variety - Using Neural2 for more natural sound
      const voices = [
        { name: 'en-US-Neural2-D', gender: 'MALE' },      // Natural male
        { name: 'en-US-Neural2-J', gender: 'MALE' },      // Warm male
        { name: 'en-US-Neural2-F', gender: 'FEMALE' },    // Clear, natural female
        { name: 'en-US-Neural2-H', gender: 'FEMALE' },    // Expressive female
        { name: 'en-US-Neural2-C', gender: 'FEMALE' },    // Professional female
        { name: 'en-GB-Neural2-B', gender: 'MALE' },      // British male
        { name: 'en-GB-Neural2-F', gender: 'FEMALE' }     // British female
      ];
      const selectedVoice = voices[Math.floor(Math.random() * voices.length)];
      console.log('Selected voice:', selectedVoice.name, selectedVoice.gender);
      
      const blob = await createSpeechBlob(data.narration, selectedVoice.name, 0.85, 'google');
      const audioUrl = URL.createObjectURL(blob);
      {
        // Create narration audio element
        const audio = new Audio(audioUrl);
        
        audio.onplay = async () => {
          setIsPlaying(true);
          // Start background music when narration starts
          if (backgroundMusicRef.current && musicReady) {
            try {
              backgroundMusicRef.current.currentTime = 0;
              await backgroundMusicRef.current.play();
              console.log('🎵 Background music playing at 10% volume');
            } catch (err) {
              console.warn('⚠️ Background music blocked by browser:', err.message);
            }
          }
        };
        
        audio.onended = () => {
          setIsPlaying(false);
          setIsPaused(false);
          URL.revokeObjectURL(audioUrl);
          // Stop background music when narration ends
          if (backgroundMusicRef.current) {
            backgroundMusicRef.current.pause();
            backgroundMusicRef.current.currentTime = 0;
          }
        };
        
        audio.onerror = () => {
          setIsPlaying(false);
          setIsPaused(false);
          console.error('Audio playback error');
          if (backgroundMusicRef.current) {
            backgroundMusicRef.current.pause();
          }
        };
        
        utteranceRef.current = audio;
        audio.play();
        console.log('Google TTS audio playing with background music at 10%');
      }
    } catch (error) {
      console.error('TTS generation error:', error);
      setIsPlaying(false);
      setIsPaused(false);
    }
  };

  const handlePauseAudio = () => {
    if (utteranceRef.current) {
      utteranceRef.current.pause();
    } else {
      window.speechSynthesis.pause();
    }
    // Pause background music too
    if (backgroundMusicRef.current) {
      backgroundMusicRef.current.pause();
    }
    setIsPaused(true);
    setIsPlaying(false);
  };

  const handleStopAudio = () => {
    if (utteranceRef.current) {
      utteranceRef.current.pause();
      utteranceRef.current.currentTime = 0;
    } else {
      window.speechSynthesis.cancel();
    }
    // Stop background music
    if (backgroundMusicRef.current) {
      backgroundMusicRef.current.pause();
      backgroundMusicRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setIsPaused(false);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (utteranceRef.current) {
        utteranceRef.current.pause();
      } else {
        window.speechSynthesis.cancel();
      }
      // Cleanup background music
      if (backgroundMusicRef.current) {
        backgroundMusicRef.current.pause();
        backgroundMusicRef.current.currentTime = 0;
      }
      // Cleanup audio context
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Street View */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div 
              ref={streetViewRef} 
              className="w-full h-[500px] lg:h-[1150px] bg-gray-900 relative"
            >
              {!streetViewAvailable && (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-white">
                  <div className="text-center space-y-3 p-6">
                    <AlertCircle className="w-12 h-12 mx-auto text-yellow-400" />
                    <p className="text-lg font-semibold">Street View Not Available</p>
                    <p className="text-sm text-gray-300">Google Street View imagery is not available for this exact location.</p>
                    <a
                      href={`https://www.google.com/maps/@${data.lat},${data.lng},15z`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-semibold transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View on Google Maps
                    </a>
                  </div>
                </div>
              )}
            </div>
            <div className="p-4 bg-gray-50 flex justify-between items-center border-t border-gray-100">
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold">{data.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-xs text-gray-400 font-mono">
                  {data.lat.toFixed(4)}, {data.lng.toFixed(4)}
                </div>
                <a
                  href={`https://www.google.com/maps/@${data.lat},${data.lng},15z`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-semibold hover:underline"
                >
                  <ExternalLink className="w-3 h-3" />
                  View on Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: AI & History */}
        <div className="space-y-6">
          {/* AI Tour Guide Card */}
          <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-2xl shadow-lg p-6 text-white relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <Bot className="w-32 h-32" />
            </div>
            <div className="relative z-10 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-2 bg-white/20 w-fit px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <Bot className="w-3 h-3" />
                  AI Tour Guide
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {!isPlaying && !isPaused && (
                    <button
                      onClick={handlePlayAudio}
                      className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all"
                      title="Play Audio Tour"
                    >
                      <Volume2 className="w-4 h-4" />
                      Play
                    </button>
                  )}
                  {isPlaying && (
                    <button
                      onClick={handlePauseAudio}
                      className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all"
                      title="Pause Audio"
                    >
                      <Pause className="w-4 h-4" />
                      Pause
                    </button>
                  )}
                  {isPaused && (
                    <button
                      onClick={handlePlayAudio}
                      className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all"
                      title="Resume Audio"
                    >
                      <Volume2 className="w-4 h-4" />
                      Resume
                    </button>
                  )}
                  {(isPlaying || isPaused) && (
                    <button
                      onClick={handleStopAudio}
                      className="flex items-center gap-1.5 bg-red-500/80 hover:bg-red-600 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all"
                      title="Stop Audio"
                    >
                      <VolumeX className="w-4 h-4" />
                      Stop
                    </button>
                  )}
                </div>
              </div>
              <p className="text-lg font-medium leading-relaxed italic">
                "{data.narration}"
              </p>
            </div>
          </div>

          {/* Historical Context Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-500 space-y-4">
            <div className="flex items-center gap-2 text-green-700 font-bold">
              <BookOpen className="w-5 h-5" />
              Historical Context
            </div>
            <div className="space-y-3">
              {data.historicalContext.thumbnail && (
                <img 
                  src={data.historicalContext.thumbnail.source} 
                  alt={data.name} 
                  className="w-full h-32 object-cover rounded-xl"
                />
              )}
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-6">
                {data.historicalContext.extract}
              </p>
              <a 
                href={data.historicalContext.content_urls.desktop.page}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-blue-600 text-sm font-semibold hover:underline"
              >
                Read more on Wikipedia
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={onReset}
            className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-xl shadow-lg transition-all active:scale-[0.98]"
          >
            <RotateCcw className="w-5 h-5" />
            Explore Another Place
          </button>
        </div>
      </div>
    </div>
  );
}
