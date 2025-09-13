const express = require("express")
const router = express.Router()

// Custom Middlewares

const auth = function (req, res, next) {
  console.log("I am inside auth middleware")
  // dummy user
  req.user = {
    userId: 1,
    role: "student",
  }

  if (req.user) {
    next()
  } else {
    res.json({
      success: false,
      message: "Not a valid user",
    })
  }
}

const isStudent = function (req, res, next) {
  console.log("student middleware")
  if (req.user.role === "student") {
    next()
  } else {
    res.json({ success: false, message: "Access denied" })
  }
}

const isAdmin = function (req, res, next) {
  console.log("admin middleware")
  if (req.user.role === "Admin") {
    next()
  } else {
    res.json({ success: false, message: "Access denied" })
  }
}

// Routes

router.get("/student", auth, isStudent, (req, res) => {
  console.log("I am inside student route")
  res.send("student specific page")
})

router.get("/admin", auth, isAdmin, (req, res) => {
  console.log("I am inside admin route")
})

module.exports = router
