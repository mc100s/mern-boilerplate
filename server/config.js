require('dotenv').config();
const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "ironhack",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

module.exports = {
  // This secret should be in an environment variable instead
  jwtSecret: process.env.JWT_SECRET || 'MyS3cr3tK3Y',
  jwtSession: {
    session: false,
  },
};