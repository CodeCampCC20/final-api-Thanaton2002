import express from "express"
import authRoutes from "./src/routes/authRoutes.js"
import errorMidddleware from "./src/middlewares/errorMiddleware.js"
import notFoundMiddleware from "./src/middlewares/notFoundMiddleware.js"
import userRoutes from "./src/routes/userRoutes.js"
import doctorRoutes from "./src/routes/doctorRoutes.js"

const app = express()
const PORT = process.env.PORT

app.use(express.json())

app.use("/auth", authRoutes)
app.use("/users", userRoutes)
app.use("/doctors", doctorRoutes)

app.use(errorMidddleware)
app.use(notFoundMiddleware)

app.listen(PORT, () => {
  console.log("Server is running at " + PORT)
})