export function trackUmami(eventName, data) {
  try {
    if (typeof window !== 'undefined' && window.umami && typeof window.umami.track === 'function') {
      if (data && Object.keys(data).length > 0) {
        window.umami.track(eventName, data);
      } else {
        window.umami.track(eventName);
      }
    }
  } catch {
    // Analytics must never interrupt user experience
  }
}
