const unggah = require("unggah");

const storage = unggah.gcs({
  keyFilename: "./capstone-386902-77ef67696fe6.json",
  bucketName: "capstone-c23-ps182",
  rename: (req, file) => {
    return `${Date.now()}-${file.originalname}`;
  },
});

const upload = unggah({
  limits: {
    fileSize: 1e15,
  },
  storage: storage,
});

module.exports = upload;
