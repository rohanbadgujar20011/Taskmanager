const mongoose = require("mongoose");
require("dotenv").config();

const ConnectionDb = () => {
  return mongoose
    .connect(process.env.URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected successfully");
    })
    .catch((error) => {
      console.error("Connection error:", error);
    });
};

module.exports = ConnectionDb;
