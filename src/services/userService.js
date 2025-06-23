import prisma from "../config/prisma.js"

export const findUserById = async (id) => {
  const user = await prisma.user.findFirst({
    where : {
      id: Number(id)
    },
    omit: {
      password: true,
    }
  })
  return user
}

export const updateUserById = async (id, username, password) => {
  const user = await prisma.user.update({
    where : {
      id: Number(id)
    },
    data: {
      username: username,
      password: password
    }
  })
  return user
}

export const postRecords = async (data) => {
  return await prisma.healthRecord.create({data : data})
}