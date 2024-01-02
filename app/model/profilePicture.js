const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const profileSchema = new Schema({
  image: String,
});

const Profile = model("Profile", profileSchema);

module.exports = Profile;
