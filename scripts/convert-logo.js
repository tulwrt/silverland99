const sharp = require('sharp');
const path = require('path');

const inputPath = 'C:/Users/Warut Srisuwan/Desktop/Logo.png';
const outputPath = path.join(__dirname, '..', 'public', 'logo.png');

sharp(inputPath)
  .flatten({ background: { r: 255, g: 255, b: 255 } })
  .toFile(outputPath)
  .then(() => {
    console.log('Logo converted successfully with white background!');
  })
  .catch(err => {
    console.error('Error converting logo:', err);
  });
