const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const userRoutes = require("./routes/user");
const stuffRoutes = require("./routes/stuff");

require("dotenv").config();
const apiAccess = process.env.API_ACCESS;

mongoose
  .connect(apiAccess, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

const app = express();
// intercepte les requete qui ont un content type json

app.use((req, res, next) => {
  //  permet d'accéder à notre API depuis n'importe quelle origine ( '*' ) ;
  res.setHeader("Access-Control-Allow-Origin", "*");
  // ajouter les headers mentionnés aux requêtes envoyées vers notre API (Origin , X-Requested-With , etc.) ;
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  // d'envoyer des requêtes avec les méthodes mentionnées ( GET ,POST , etc.).
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());

// routes here
app.use("/api/auth", userRoutes);
app.use("/api/stuff", stuffRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = app;
