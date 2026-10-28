const small = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
function words(n) {
  if (n < 20) return small[n];
  if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 ? `-${small[n % 10]}` : '');
  if (n < 1000) return `${small[Math.floor(n / 100)]} hundred${n % 100 ? ` ${words(n % 100)}` : ''}`;
  for (const [size, label] of [[1e12, 'trillion'], [1e9, 'billion'], [1e6, 'million'], [1e3, 'thousand']]) {
    if (n >= size) return `${words(Math.floor(n / size))} ${label}${n % size ? ` ${words(n % size)}` : ''}`;
  }
}

// Keep display copy intact; make comma-grouped counts unambiguous for speech.
export function cityFactSpeechText(text) {
  return text.replace(/\b\d{1,3}(?:,\d{3})+\+?(?![\d,])/g, (match, offset) => {
    // Leave decimal amounts and malformed number groups untouched.
    if (/[\d,.]/.test(text[offset - 1] || '') || text[offset + match.length] === '.') {
      if (/^\.\d/.test(text.slice(offset + match.length))) return match;
      if (/[\d,.]/.test(text[offset - 1] || '')) return match;
    }
    const plus = match.endsWith('+');
    const number = Number(match.replace(/[,+]/g, ''));
    if (!Number.isSafeInteger(number) || number >= 1e15) return match;
    return `${plus ? 'more than ' : ''}${words(number)}`;
  });
}
