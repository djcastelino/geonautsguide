export function apiUrl(path) {
  return (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '') + path;
}

export async function createSpeechBlob(text, voice, rate = 1, provider = 'azure') {
  const response = await fetch(apiUrl('/api/speech'), {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, voice, rate, provider }),
  });
  if (!response.ok) {
    const problem = await response.json().catch(() => ({}));
    throw new Error(problem.error || `Audio request failed (${response.status}).`);
  }
  return response.blob();
}
