const Product = require("../models/productModel")

// Business Logic

const getProducts = async (req, res) => {
  try {
    const allProducts = await Product.find()
    if (!allProducts || allProducts.length == 0) {
      res.json({
        message: "There is no product",
      })
    }
    // if we have product > 1
    res.status(200).json({
      success: true,
      message: allProducts,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    })
  }
}

const createProducts = async (req, res) => {
  const { name, price, description, category } = req.body
  try {
    const newProduct = new Product({ name, price, description, category })
    await newProduct.save()
    res.status(200).json({
      success: true,
      product: newProduct,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    })
  }
}

const updateProducts = async (req, res) => {
  const { name, price, description, category } = req.body
  const { id } = req.params
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        name,
        price,
        description,
        category,
      },
      {
        new: true,
      }
    )

    res.status(200).json({
      success: true,
      product: updatedProduct,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    })
  }
}

module.exports = { getProducts, createProducts, updateProducts }
