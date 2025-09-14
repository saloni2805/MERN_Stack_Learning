const express = require("express")
const router = express.Router()
const {
  getProducts,
  updateProducts,
  createProducts,
  deleteProduct,
} = require("../controllers/productController")

router.get("/products", getProducts)
router.post("/product", createProducts)
router.put("/product/:id", updateProducts)
router.delete("/product/:id", deleteProduct)

module.exports = router
