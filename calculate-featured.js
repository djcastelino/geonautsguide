import fs from 'fs';

const data = JSON.parse(fs.readFileSync('./src/data/landmarks.json', 'utf8'));
const landmarks = data.landmarks;

console.log('='.repeat(80));
console.log('NEXT 10 DAYS - FEATURED LANDMARKS');
console.log('='.repeat(80));
console.log();

// Today is May 2, 2026
const today = new Date('2026-05-02');
console.log(`Starting from: ${today.toDateString()}`);
console.log(`Total landmarks in database: ${landmarks.length}`);
console.log();

// Calculate day of year for today
const startOfYear = new Date(today.getFullYear(), 0, 0);
const diff = today - startOfYear;
const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));

console.log(`Day of year: ${dayOfYear}`);
console.log();
console.log('-'.repeat(80));

for (let i = 0; i < 10; i++) {
  const currentDay = new Date(today);
  currentDay.setDate(currentDay.getDate() + i);
  
  const currentStartOfYear = new Date(currentDay.getFullYear(), 0, 0);
  const currentDiff = currentDay - currentStartOfYear;
  const currentDayOfYear = Math.floor(currentDiff / (1000 * 60 * 60 * 24));
  
  const index = currentDayOfYear % landmarks.length;
  const featuredLandmark = landmarks[index];
  
  console.log(`Day ${i + 1}: ${currentDay.toDateString()}`);
  console.log(`   Index: ${index}`);
  console.log(`   Name: ${featuredLandmark.name}`);
  console.log(`   Location: ${featuredLandmark.city}, ${featuredLandmark.country}`);
  console.log(`   ID: ${featuredLandmark.id}`);
  console.log(`   Current URL: ${featuredLandmark.imageUrl.substring(0, 80)}...`);
  console.log();
}
