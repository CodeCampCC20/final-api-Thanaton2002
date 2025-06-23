import { findDoctor } from "../services/authServices.js"
import { findDoctorById, updateDoctorById } from "../services/doctorService.js"
import { hashService } from "../services/hashServices.js"
import createError from "../utils/createError.js"

export const getDoctor = async (req, res, next) => {
  try {
    const { id } = req.user
    // console.log('id', id)
    const user = await findDoctorById(id)
    // console.log('user', user)

    res.json({
      id: user.id,
      username: user.username,
      specialization: user.specialization
    })

  } catch (error) {
    next(error)
  }
}

export const updateDoctor = async (req, res, next) => {
  try {
    const { username, password, specialization } = req.body
    const { id } = req.user

    if ( !username || !password || !specialization ) {
      createError(400, "Username or Password or specialization is missing.")
    }

    const isExist = await findDoctor(username)

    if (isExist) {
      createError(400, "Username already exist.")
    }

    const hashPassword = hashService(password)

    console.log('id', id)
    const user = await updateDoctorById(id, username, hashPassword, specialization)
    console.log('user', user)

    res.json({
      id: user.id,
      username: user.username
    })
  } catch (error) {
    next(error)
  }
}