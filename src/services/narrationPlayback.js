// Music follows actual narration playback, including buffering and failures.
export function createNarrationPlayback(audio, music, callbacks = {}) {
  let musicEnabled = false;
  let playing = false;
  const silenceMusic = () => music?.pause();
  const startMusic = () => {
    if (!musicEnabled || !playing || !music) return;
    music.volume = 0.04;
    music.play().catch(() => {});
  };
  audio.volume = 1;
  audio.muted = false;
  audio.onplaying = () => {
    playing = true;
    callbacks.onPlaying?.();
    startMusic();
  };
  audio.onwaiting = audio.onstalled = () => {
    playing = false;
    silenceMusic();
    callbacks.onBuffering?.();
  };
  audio.onpause = () => { playing = false; silenceMusic(); };
  audio.onloadedmetadata = () => callbacks.onDuration?.(audio.duration);
  audio.ontimeupdate = () => callbacks.onTime?.(audio.currentTime);
  audio.onended = () => {
    playing = false;
    silenceMusic();
    callbacks.onEnded?.();
  };
  audio.onerror = () => {
    playing = false;
    silenceMusic();
    callbacks.onError?.(new Error('The narration could not be played. Please try again.'));
  };
  return {
    async play() {
      try { await audio.play(); }
      catch (error) {
        playing = false;
        silenceMusic();
        callbacks.onError?.(error);
        throw error;
      }
    },
    pause() { audio.pause(); silenceMusic(); },
    stop() {
      audio.pause(); audio.currentTime = 0; playing = false;
      silenceMusic(); if (music) music.currentTime = 0;
    },
    setMusicEnabled(value) {
      musicEnabled = value;
      if (value) startMusic(); else silenceMusic();
    },
    dispose() {
      playing = false; audio.pause(); silenceMusic();
      audio.onplaying = audio.onwaiting = audio.onstalled = audio.onpause = null;
      audio.onloadedmetadata = audio.ontimeupdate = audio.onended = audio.onerror = null;
    },
  };
}
