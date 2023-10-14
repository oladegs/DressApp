let config = require("./config");

// Database setup
const mongoose = require("mongoose");

module.exports = function () {
  mongoose.connect(config.FarukDB);

  let mongodb = mongoose.connection;

  mongodb.on("error", console.error.bind(console, "Connection Error: "));
  mongodb.once("open", () => {
    console.log("====> Connected to MongoDB.");
    console.log("====> Ready to work");
  });

  return mongodb;
};
