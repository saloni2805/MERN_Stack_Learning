const express = require("express")
const connectDB = require("./db")
const users = require("./routes/userRoute")

const app = express()

const PORT = 3000

//body parser
app.use(express.json())

app.use("/api", users)
// --> api/users

connectDB()

app.get("/", (req, res) => {
  console.log("Home Page")
  res.send("Hello Jee")
})

app.listen(PORT, () => {
  console.log("App Started")
})
