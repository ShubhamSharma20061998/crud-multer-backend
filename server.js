require("dotenv").config();
const express = require("express");
const cors = require("cors");
const configureDB = require("./config/db");
const path = require("path");

const imageCtrl = require("./app/controller/image-ctrl");
const upload = require("./app/middleware/multer");

const app = express();
const port = 3090;

configureDB();

app.use(express.json());
app.use(cors());

const uploadsDirectory = path.resolve(
  __dirname,
  "../frontend/src/assets/uploads"
);

app.use("/uploads", express.static(uploadsDirectory));

app.get("/api/getPic", imageCtrl.getImage);
app.post("/api/upload", upload.single("image"), imageCtrl.postImage);
app.put("/api/updatePic", upload.single("image"), imageCtrl.updateImage);

app.listen(port, () => {
  console.log("server listening on port", port);
});
