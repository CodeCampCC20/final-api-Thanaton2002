import prisma from "../config/prisma.js"

export const findDoctorById = async (id) => {
  const user = await prisma.doctor.findFirst({
    where : {
      id: Number(id)
    },
    omit: {
      password: true,
    }
  })
  return user
}

export const updateDoctorById = async (id, username, password, specialization) => {
  const user = await prisma.doctor.update({
    where : {
      id: Number(id)
    },
    data: {
      username: username,
      password: password,
      specialization: specialization,
    }
  })
  return user
}