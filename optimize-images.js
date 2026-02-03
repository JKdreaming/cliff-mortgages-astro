const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = '/Volumes/14 Tera/Development/Cliff Mortgages/cliff-mortgages-lead-gen-site (astro edition) copy/Astro Site/public/made-easy/';
const images = [
  'friends-looking-at-the-restaurant-menu-2026-01-08-22-27-51-utc.jpg',
  'architects-are-reviewing-plans-together-buildings-2026-01-07-01-00-06-utc.jpg',
  'top-view-of-business-people-putting-their-hands-on-2026-01-08-07-14-39-utc.jpg',
  'overjoyed-black-woman-holding-money-cash-in-hands-2026-01-08-23-10-47-utc.jpg'
];

async function optimizeImages() {
  for (const image of images) {
    const inputPath = path.join(imagesDir, image);
    const tempPath = path.join(imagesDir, `temp-${image}`);
    
    try {
      await sharp(inputPath)
        .resize(800, 600, { fit: 'cover', position: 'center' })
        .jpeg({ quality: 85, progressive: true })
        .toFile(tempPath);
      
      fs.renameSync(tempPath, inputPath);
      const stats = fs.statSync(inputPath);
      console.log(`Optimized ${image}: ${(stats.size / 1024).toFixed(1)}KB`);
    } catch (err) {
      console.error(`Error processing ${image}:`, err.message);
      if (fs.existsSync(tempPath)) {
        fs.unlinkSync(tempPath);
      }
    }
  }
}

optimizeImages();
