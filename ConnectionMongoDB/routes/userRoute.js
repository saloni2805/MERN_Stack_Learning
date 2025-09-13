const express = require("express")
const router = express.Router()

const User = require("../models/userModel")

// routes

// CRUD

// View/Read
router.get("/users", async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

// Create
router.post("/users", async (req, res) => {
  try {
    const { name, age, weight } = req.body
    const newUsers = await User({ name, age, weight })
    await newUsers.save()
    res.status(200).json({ success: true, user: newUsers })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

// Update
router.put("/users/:id", async (req, res) => {
  const { id } = req.params
  const { name, age, weight } = req.body
  try {
    const updateUser = User.findByIdAndUpdate(id, { name, age, weight })
    if (!updateUser) {
      res.json({
        message: "User Not found",
      })
    }
    // But if u have updated user
    res.status(200).json({ success: true, user: updateUser })
    // updateUser in message is value of old user
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

// Delete
router.delete("/users/:id", async (req, res) => {
  const { id } = req.params
  try {
    const deleteUser = User.findByIdAndDelete(id)
    if (!deleteUser) {
      res.json({
        message: "User Not found",
      })
    }
    // But if u have updated user
    res.status(200).json({ success: true, user: deleteUser })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

module.exports = router
