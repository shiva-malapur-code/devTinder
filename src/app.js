const express = require("express");
const app = express();
const { adminAuth, userAuth } = require("./middlewares/auth");

app.get("/getUserData", (req, res) => {
  try {
    throw new Error("Error");
    res.send("Get User Data");
  } catch (err) {
    res.status(500).send("Something went wrong, Please contact support team");
  }
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(400).send("Something went wrong");
  }
});

app.listen("7777", () => {
  console.log("Server is successfully listening on port 7777");
});
