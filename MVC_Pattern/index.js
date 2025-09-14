const express = require("express")
const connectDB = require("./config/db")

// Route importing
const productRoutes = require("./routes/productRoutes")

const app = express()

const PORT = 3000

//body parser
app.use(express.json())

app.use("/api", productRoutes)
// --> api/users

connectDB()

app.get("/", (req, res) => {
  console.log("Home Page")
  res.send("Hello Jee")
})

app.listen(PORT, () => {
  console.log("App Started")
})
