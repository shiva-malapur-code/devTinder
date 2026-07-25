//Handle Auth Middleware for all types of requests
const adminAuth = (req, res, next) => {
  const token = "xyz";
  const isAdminAuth = token === "xyz";
  if (!isAdminAuth) {
    res.status(401).send("Not Authorized");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  const token = "xy";
  const isAdminAuth = token === "xyz";
  if (!isAdminAuth) {
    res.status(401).send("User not Authorized");
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
  userAuth,
};
