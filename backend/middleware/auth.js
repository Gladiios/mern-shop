const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const userId = decodedToken.userId;
    const userRole = decodedToken.role; // Extraire le rôle
    req.auth = {
      userId: userId,
      role: userRole, // Stocker le rôle dans l'objet de requête
    };
    next();
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
