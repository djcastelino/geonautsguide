export function playArrivalSound() {
  const Audio = window.AudioContext || window.webkitAudioContext;
  if (!Audio) return;
  const context = new Audio();
  context.resume().then(() => {
    const now = context.currentTime;
    const volume = context.createGain();
    volume.gain.setValueAtTime(.001, now);
    volume.gain.exponentialRampToValueAtTime(.12, now + .16);
    volume.gain.exponentialRampToValueAtTime(.001, now + 1.4);
    volume.connect(context.destination);
    const horn = context.createOscillator();
    horn.type = 'triangle';
    horn.frequency.setValueAtTime(116, now);
    horn.frequency.linearRampToValueAtTime(103, now + 1.2);
    horn.connect(volume);
    horn.start();
    horn.stop(now + 1.45);
    horn.onended = () => { void context.close(); };
  }).catch(() => { void context.close(); });
}
