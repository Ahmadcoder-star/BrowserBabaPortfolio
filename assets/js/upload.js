import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
  cloud_name: 'dkrzldy5n',
  api_key: '751734889262393',
  api_secret: 'PZ4ZKiTwsQtNyQJYmD6ZQ-xEboE'
});

// Upload image from local folder
async function uploadImage(filePath) {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'portfolio-gallery'
    });
    console.log('✅ Uploaded:', result.secure_url);
  } catch (err) {
    console.error('❌ Error:', err);
  }
}

// Example usage:
uploadImage('./images/my-photo.jpg');
