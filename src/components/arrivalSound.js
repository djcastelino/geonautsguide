export async function playArrivalSound() {
  const Audio = window.AudioContext || window.webkitAudioContext;
  if (!Audio) throw new Error('Sound is unavailable in this browser.');
  const context = new Audio();
  try {
    await context.resume();
    const now = context.currentTime;
    const volume = context.createGain();
    volume.gain.setValueAtTime(.001, now);
    volume.gain.exponentialRampToValueAtTime(.27, now + .12);
    volume.gain.exponentialRampToValueAtTime(.001, now + 1.4);
    volume.connect(context.destination);
    const horn = context.createOscillator();
    horn.type = 'triangle';
    horn.frequency.setValueAtTime(220, now);
    horn.frequency.linearRampToValueAtTime(196, now + 1.2);
    horn.connect(volume);
    horn.start();
    horn.stop(now + 1.45);
    horn.onended = () => { void context.close(); };
  } catch (error) {
    void context.close();
    throw error;
  }
}
