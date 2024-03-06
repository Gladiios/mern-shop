module.exports = (req, res, next) => {
  if (req.auth.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Access denied" });
  }
};
