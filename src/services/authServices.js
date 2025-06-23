import prisma from "../config/prisma.js";

export const createDoctor = (data) => {
  return prisma.doctor.create({data : data})
} 

export const createUser = (data) => {
  return prisma.user.create({data : data})
} 

export const findUser = async (username) => {
  const user = await prisma.user.findFirst({
    where : {
      username : username
    }
  })
  return user
}

export const findDoctor = async (username) => {
  const user = await prisma.doctor.findFirst({
    where : {
      username : username
    }
  })
  return user 
}

