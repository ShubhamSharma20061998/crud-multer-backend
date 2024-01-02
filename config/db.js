const mongoose = require("mongoose");

const configureDB = async () => {
  const dbURL = process.env.DB_URL || "mongodb://127.0.0.1:27017";
  const dbName = process.env.DB_NAME || "test-app";
  try {
    const db = await mongoose.connect(`${dbURL}/${dbName}`);
  } catch (err) {
    console.log("error connecting to db");
  }
};

module.exports = configureDB;
