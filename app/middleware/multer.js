const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../frontend/src/assets/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
  fileFilter: ({ req, res }, file, cb) => {
    if (!file.originalname.match(/\.(jpg)$/)) {
      //   return cb(new Error("Please upload a valid .jpg file"));
      return res
        .status(400)
        .json({ error: [{ msg: "Please upload a valid .jpg file" }] });
    }
    cb(null, true);
  },
});

module.exports = upload;
