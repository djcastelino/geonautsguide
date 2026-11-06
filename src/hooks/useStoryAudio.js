import { useCallback, useEffect, useRef, useState } from 'react';
import { apiUrl } from '../services/backend';

export default function useStoryAudio() {
  const current = useRef(null);
  const [state, setState] = useState('idle');
  const [error, setError] = useState('');
  const stop = useCallback(() => {
    const entry = current.current;
    current.current = null;
    entry?.controller.abort();
    if (entry?.audio) { entry.audio.pause(); entry.audio.onended = null; entry.audio.onerror = null; }
    if (entry?.url) URL.revokeObjectURL(entry.url);
  }, []);
  useEffect(() => () => stop(), [stop]);
  const reset = () => { stop(); setState('idle'); setError(''); };
  const toggle = async text => {
    if (state === 'loading') return;
    const active = current.current;
    if (state === 'playing') { active?.audio.pause(); setState('paused'); return; }
    if (state === 'paused' && active?.audio) {
      try { await active.audio.play(); if (current.current === active) setState('playing'); }
      catch { if (current.current === active) { stop(); setState('idle'); setError('Playback could not start. Please try again.'); } }
      return;
    }
    stop(); setError(''); setState('loading');
    const entry = { controller: new AbortController() }; current.current = entry;
    try {
      const response = await fetch(apiUrl('/api/speech'), { method: 'POST', headers: { 'Content-Type': 'application/json' }, signal: entry.controller.signal, body: JSON.stringify({ text, voice: 'en-US-AndrewMultilingualNeural', rate: 0.97 }) });
      if (!response.ok) throw new Error('Audio unavailable');
      const blob = await response.blob();
      if (current.current !== entry) return;
      entry.url = URL.createObjectURL(blob); entry.audio = new Audio(entry.url);
      entry.audio.onended = () => { if (current.current === entry) { stop(); setState('idle'); } };
      entry.audio.onerror = () => { if (current.current === entry) { stop(); setState('idle'); setError('Audio could not play. Please try again.'); } };
      await entry.audio.play(); if (current.current === entry) setState('playing');
    } catch (problem) {
      if (current.current === entry && problem.name !== 'AbortError') { stop(); setState('idle'); setError('The audio guide could not load. Please try again.'); }
    }
  };
  return { state, error, reset, toggle };
}
