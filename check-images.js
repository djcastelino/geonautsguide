const fs = require('fs');

// Read landmarks data
const data = JSON.parse(fs.readFileSync('./src/data/landmarks.json', 'utf8'));

console.log('Checking image URLs for landmarks...\n');

const brokenImages = [];
let checkedCount = 0;

data.landmarks.forEach(landmark => {
  checkedCount++;
  if (landmark.imageUrl && landmark.imageUrl.includes('wikimedia')) {
    console.log(`${checkedCount}. ${landmark.name}: ${landmark.imageUrl}`);
    brokenImages.push({
      id: landmark.id,
      name: landmark.name,
      url: landmark.imageUrl
    });
  }
});

console.log(`\n\nTotal landmarks with Wikimedia images: ${brokenImages.length}`);
console.log('\nAll Wikimedia URLs:\n');

brokenImages.forEach((img, index) => {
  console.log(`${index + 1}. ${img.name}`);
  console.log(`   ID: ${img.id}`);
  console.log(`   URL: ${img.url}`);
  console.log('');
});
