const sharp = require('sharp');
const path = require('path');

const inputPath = 'C:/Users/Warut Srisuwan/Desktop/Logo.png';
const outputPath = path.join(__dirname, '..', 'app', 'favicon.ico');

// Convert PNG to ICO format (32x32)
sharp(inputPath)
  .resize(32, 32)
  .toFile(outputPath)
  .then(() => {
    console.log('Favicon converted successfully!');
  })
  .catch(err => {
    console.error('Error converting favicon:', err);
  });
