const express = require("express");
const router = express.Router();
const multer = require("multer");
const { uploadImage } = require("../controllers/imageController");

// Save uploads to local 'uploads/' folder
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});

const upload = multer({ storage });

router.post("/upload", upload.single("image"), uploadImage);

module.exports = router;
