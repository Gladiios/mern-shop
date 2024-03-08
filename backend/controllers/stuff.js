const { error } = require("console");
const Product = require("../models/Product");
const fs = require("fs");

exports.createProduct = (req, res, next) => {
  const productObject = JSON.parse(req.body.product);
  delete productObject._id;
  delete productObject._userId;
  const product = new Product({
    ...productObject,
    userId: req.auth.userId,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
  });

  product
    .save()
    .then(() => {
      res.status(201).json({ message: "Product saved !" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.modifyProduct = (req, res, next) => {
  const productObject = req.file
    ? {
        ...JSON.parse(req.body.product),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };

  deleteProduct._userRole;

  Product.findOne({ _id: req.params.id })
    .then((product) => {
      Product.updateOne(
        { _id: req.params.id },
        { ...productObject, _id: req.params.id }
      )
        .then(() => res.status(200).json({ message: "Product updated !" }))
        .catch((error) => res.status(401).json({ error }));
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.deleteProduct = (req, res, next) => {
  Product.findOne({ _id: req.params.id })
    .then((product) => {
      if (product.userId != req.auth.userId) {
        res.status(401).json({ message: "Not authorized" });
      } else {
        const filename = product.imageUrl.split("/images/")[1];
        fs.unlink(`images/${filename}`, () => {
          Product.deleteOne({ _id: req.params.id })
            .then(() => {
              res.status(200).json({ message: "Product deleted !" });
            })
            .catch((error) => res.status(401).json({ error }));
        });
      }
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

exports.getOneProduct = (req, res, next) => {
  Product.findOne({ _id: req.params.id })
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((error) => {
      res.status(404).json({ error });
    });
};

exports.getAllProducts = (req, res, next) => {
  Product.find()
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
