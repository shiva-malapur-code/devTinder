const express = require("express");
const app = express();
const { adminAuth, userAuth } = require("./middlewares/auth");

//Handle Auth Middleware for all types of requests
app.use("/admin", adminAuth);

app.get("/admin/getAllData", (req, res) => {
  res.send("Admin Authorized");
});

app.get("/user", userAuth, (req, res) => {
  res.send("User Authorized");
});

app.delete("/admin/deleteUser", (req, res) => {
  res.send("Deleted a user");
});

app.listen("7777", () => {
  console.log("Server is successfully listening on port 7777");
});
