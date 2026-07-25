const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://shiva_node:@shivanode.uquyiff.mongodb.net/devTinder",
  );
};

module.exports = connectDB;
