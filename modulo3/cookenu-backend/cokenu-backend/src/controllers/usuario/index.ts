import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'
import { encrypt, decrypt } from "../config/password"
import { sign } from "jsonwebtoken"

var prisma = new PrismaClient()

export async function signup(req: Request, res: Response){

  const { body: { name, email, password } } = req

  const duplicatedEmail = await prisma.usuario_cokenu.findFirst({
    where: {
      email
    }
  })

  if(!!duplicatedEmail){

    return res.status(400).json("Email duplicado")

  }
  
  const hashPassword = await encrypt(password)

  const user = await prisma.usuario_cokenu.create({
    data: {
      email: email,
      name,
      password: hashPassword,
    }
  })

  return res.json(user)

}

export async function login(req: Request, res: Response){

  const { body: { email, password } } = req

  const user = await prisma.usuario_cokenu.findFirst({
    where: {
      email: email,
    }
  })

  const testPassword = await decrypt(password, user ? user.password : "")

  if(testPassword && user){
    const token = sign({ id_user: user.id, email: user.email }, "segredo", {expiresIn: "24h"}) 
  
    return res.status(200).send({
      access_token: token
    })
  }

  return res.status(404)

}

export async function getOwnProfile(req: Request, res: Response){

  const { body: { user } } = req

  const profile = await prisma.usuario_cokenu.findUnique({
    where: {
      id: user.id_user
    }
  })

  if(profile){
    return res.json(profile)
  }

  return res.status(404)

}

export async function getProfile(req: Request, res: Response){

  const { params: { id } } = req

  const profile = await prisma.usuario_cokenu.findUnique({
    where: {
      id: Number(id)
    }
  })

  if(profile){
    return res.json(profile)
  }

  return res.status(404)

}
