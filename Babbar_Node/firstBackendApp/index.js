const express = require("express") // include
const app = express() // initialising application
const route = require("./routes/route") // importing router

// converts json into valid object
app.use(express.json())

// Mounting the routes
app.use("/api", route)

//--> api/student (isStudent)
//--> api/admin (isAdmin)

// Middleware - logging, auth, validation
// Order  is important because next() goes thatwise
// const loggingMiddleware = function (req, res, next) {
//   console.log("Logging")
//   next()
// }
// // Loading middleware into application
// app.use(loggingMiddleware)

// const authMiddleware = function (req, res, next) {
//   console.log("Auth")
//   next()
// }
// app.use(authMiddleware)

// const validationMiddleware = function (req, res, next) {
//   console.log("Validation")
//   next()
// }
// app.use(validationMiddleware)

app.get("/", (req, res) => {
  console.log("I am route handler")
  console.log(req.body)
  res.send("Get req recieved")
})

const port = "5000"

app.listen(port, () => {
  console.log("Application started")
})
