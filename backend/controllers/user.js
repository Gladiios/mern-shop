const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then(() => res.status(201).json({ message: "user created !" }))
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ message: "Wrong email or password" });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ message: "Wrong email or password" });
          }
          const token = jwt.sign(
            { userId: user._id, role: user.role }, // Inclure le rôle ici
            "RANDOM_TOKEN_SECRET",
            { expiresIn: "24h" }
          );
          res.status(200).json({
            userId: user._id,
            token: token, // Envoyer le token incluant le rôle
            role: user.role, // Cela peut être omis si le rôle est uniquement utilisé côté serveur
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.addproduct = (req, res, next) => {};
