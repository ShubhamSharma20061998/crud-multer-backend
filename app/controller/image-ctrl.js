const Profile = require("../model/profilePicture");
const fs = require("fs");
const path = require("path");
const imageCtrl = {};

imageCtrl.getImage = async (req, res) => {
  try {
    const result = await Profile.find();
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

imageCtrl.postImage = async (req, res) => {
  const image = req.file;
  try {
    console.log(image);
    const result = await Profile();
    result.image = image.filename;
    await result.save();
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

imageCtrl.updateImage = async (req, res) => {
  const { image } = req.query;
  const file = req.file.filename;
  const filePath = path.join(
    __dirname,
    "../../.././frontend/src/assets/uploads",
    image
  );
  console.log("filePath", filePath);
  const result = await Profile.findOneAndUpdate(
    { image: image },
    { image: file },
    { new: true }
  );
  if (result) {
    fs.unlinkSync(filePath);
  }
  res.json(result);
};

module.exports = imageCtrl;
