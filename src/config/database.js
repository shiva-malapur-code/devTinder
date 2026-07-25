const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://shiva_node:zUUEcuM3JjgUH1R6@shivanode.uquyiff.mongodb.net/devTinder",
  );
};

module.exports = connectDB;
