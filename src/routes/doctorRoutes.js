import express from "express"
import { authCheckDoctor } from "../middlewares/authCheckMiddlewares.js"
import { getDoctor, updateDoctor } from "../controllers/doctorControllers.js"


const doctorRoutes = express.Router()

doctorRoutes.get("/me", authCheckDoctor, getDoctor)
doctorRoutes.patch("/me", authCheckDoctor, updateDoctor)

export default doctorRoutes