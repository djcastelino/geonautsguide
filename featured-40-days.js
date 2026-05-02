import fs from 'fs';

const data = JSON.parse(fs.readFileSync('./src/data/landmarks.json', 'utf8'));
const landmarks = data.landmarks;

console.log('='.repeat(80));
console.log('FEATURED LANDMARKS: MAY 11 - JUNE 19, 2026 (40 DAYS)');
console.log('='.repeat(80));
console.log();
console.log('Image specs: 1200x800 pixels, PNG format, high quality');
console.log('Save as: {landmark-id}.png in /public/images/landmarks/');
console.log();
console.log('-'.repeat(80));
console.log();

// Start from May 11, 2026
const startDate = new Date('2026-05-11');

for (let i = 0; i < 40; i++) {
  const currentDay = new Date(startDate);
  currentDay.setDate(currentDay.getDate() + i);
  
  const startOfYear = new Date(currentDay.getFullYear(), 0, 0);
  const diff = currentDay - startOfYear;
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  const index = dayOfYear % landmarks.length;
  const featuredLandmark = landmarks[index];
  
  console.log(`${i + 1}. ${currentDay.toDateString()} - ${featuredLandmark.name}`);
  console.log(`   Location: ${featuredLandmark.city}, ${featuredLandmark.country}`);
  console.log(`   Filename: ${featuredLandmark.id}.png`);
  console.log();
}
