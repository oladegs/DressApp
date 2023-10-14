var express = require("express");
var router = express.Router();

let productController = require("../controllers/index");

router.get("/", productController.home);
router.get("/home", productController.home);

router.get("/products", productController.getProducts);

router.get("/products/:id", productController.getProductsById);

router.post("/products", productController.addNewProducts);

router.put("/products/:id", productController.updateProductById);

router.delete("/products/:id", productController.delProductById);

module.exports = router;
