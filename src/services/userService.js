import { date } from "yup"
import prisma from "../config/prisma.js"

export const findUserById = async (id) => {
  const user = await prisma.user.findFirst({
    where: {
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
    where: {
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
  return await prisma.healthRecord.create({ data: data })
}


export const findRecordByUserId = async (id) => {
  const records = await prisma.healthRecord.findMany({
    where: {
      userId: Number(id)
    }
  })
  return records
}

export const findRecordByDateRange = async (id, start, end) => {
  const records = await prisma.healthRecord.findMany({
    where: {
      userId: Number(id),
      date: {
        gte : start,
        lte: end
      }
    }
  })
  return records
}

export const findRecordByRecordId = async (userId, recordId) => {
  const record = await prisma.healthRecord.findMany({
    where: {
      userId: Number(userId),
      id: Number(recordId)
    }
  })
  return record
}

export const updateRecordById = async (recordId, userId, data) => {
  const record = await prisma.healthRecord.update({
    where: {
      id: Number(recordId),
      userId: Number(userId)
    },
    data: {
      type: data.type,
      value: data.value
    }
  })
  return record
}