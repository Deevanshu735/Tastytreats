require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (file, folder) => {
  if (!file) {
    console.log("No file provided");
    return null;
  }

  try {
    const result = await cloudinary.uploader.upload(file, {
      folder,
      eager: [
        {
          width: 500,
          height: 500,
          crop: "fill",
          aspect_ratio: "1.0",
        },
      ],
    });
    console.log("File uploaded successfully:");
    fs.unlinkSync(file);
    return result;
  } catch (e) {
    console.log("Error while uploading to cloudinary", e);
    return null;
  }
};
module.exports = uploadOnCloudinary;
