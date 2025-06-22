exports.uploadImage = (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    res.status(200).json({
      message: "Image uploaded successfully",
      filename: req.file.filename,
      path: `/uploads/${req.file.filename}`,
    });
  } catch (err) {
    res.status(500).json({ message: "Upload failed", error: err.message });
  }
};
