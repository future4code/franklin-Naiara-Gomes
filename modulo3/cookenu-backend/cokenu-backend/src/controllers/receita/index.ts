import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'


var prisma = new PrismaClient()

export async function createRecipe(req: Request, res: Response){

  const { body: { title, description, image,user } } = req

  const recipe = await prisma.receita_cokenu.create({
    data: {
      title,
      description,
      image,
      owner: {
        connect: {
          id: Number(user.id_user)
        }
      }
    }
  })

  return res.json(recipe)

}

export async function getRecipe(req: Request, res: Response){

  const { params: { id } } = req

  const recipe = await prisma.receita_cokenu.findUnique({
    where: {
      id: Number(id)
    }
  })

  return res.json(recipe)

}

export async function getFeed(req: Request, res: Response){

  const recipes = await prisma.receita_cokenu.findMany()

  return res.json(recipes)

}