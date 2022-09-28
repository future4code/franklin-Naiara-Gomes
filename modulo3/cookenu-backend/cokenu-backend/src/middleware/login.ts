import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken"


export default function VerifyJWT(req: Request, res: Response, next: NextFunction){

  const { headers: { authorization } } = req

  try {

    const decode = verify( authorization ? authorization.split(" ")[1] : "" , "segredo")

    req.body.user = decode

    return next()

  } catch(err) {
    return res.status(401).send("Falha na autenticação")
  }

}