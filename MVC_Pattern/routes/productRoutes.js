const express = require("express")
const router = express.Router()
const {
  getProducts,
  updateProducts,
  createProducts,
} = require("../controllers/productController")

router.get("/products", getProducts)
router.post("/product", createProducts)
router.put("/product/:id", updateProducts)

module.exports = router
