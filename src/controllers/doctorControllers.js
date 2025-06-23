import { findUser } from "../services/authServices.js"
import { findUserById, updateUserById } from "../services/userService.js"
import createError from "../utils/createError.js"

export const getUser = async (req, res, next) => {
  try {
    const { id } = req.user
    // console.log('id', id)
    const user = await findUserById(id)
    // console.log('user', user)

    res.json({
      id: user.id,
      username: user.username
    })

  } catch (error) {
    next(error)
  }
}

export const updateUser = async (req, res, next) => {
  try {
    const { username, password } = req.body
    const { id } = req.user

    const isExist = await findUser(username)

    if (isExist) { 
      createError(400, "Username already exist.")
    }

    const hashPassword = hashService(password)

    console.log('id', id)
    const user = await updateUserById(id, username, hashPassword)
    console.log('user', user)

    res.json({
      id: user.id,
      username: user.username
    })
  } catch (error) {
    next(error)
  }
}