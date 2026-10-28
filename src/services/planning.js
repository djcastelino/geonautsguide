// Retry only a rejected, rate-limited request, once, after the provider's cooldown.
export async function requestPlan(url, data, { onWaiting = () => {}, fetcher = fetch,
  wait = ms => new Promise(resolve => setTimeout(resolve, ms)) } = {}) {
  for (let attempt = 0; attempt < 2; attempt++) {
    const response = await fetcher(url, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data),
    });
    const result = await response.json().catch(() => ({}));
    if (response.ok) return result;
    const seconds = Number(response.headers.get('Retry-After') || result.retryAfter);
    if (response.status === 429 && attempt === 0 && seconds > 0 && seconds <= 30) {
      onWaiting(`The travel AI is busy. Retrying automatically in ${Math.ceil(seconds)} seconds…`);
      await wait(Math.ceil(seconds) * 1000);
      onWaiting('');
      continue;
    }
    throw new Error(result.error || `The plan could not be generated (${response.status}). Please try again.`);
  }
}
