let ProductModel = require("../models/productModel");

// Home page on the browser
exports.home = (req, res) => {
  res.send(`{"message" : "Welcome to DressStore Application."}`);
};

// Get all products from the database
exports.getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a product by id from the database
exports.getProductsById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    } else {
      res.status(200).json(product); // Send the product if found
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add new products to the database
exports.addNewProducts = async (req, res) => {
  try {
    const product = await ProductModel.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// Update product by id to the Database
exports.updateProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res
        .status(404)
        .json({ message: `cannot find any product with ID ${id}` });
    }
    const updatedProduct = await ProductModel.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Remove product by id from the Database
exports.delProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findByIdAndDelete(id);
    if (!product) {
      return res
        .status(404)
        .json({ message: `cannot find any product with ID ${id} :(` });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
