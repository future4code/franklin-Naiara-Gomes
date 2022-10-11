import express from "express"
import * as UserControllers from "../controllers/usuario"
import * as RecipeControllers from "../controllers/receita"
import VerifyJWT from "../middleware/login"

const routes = express.Router()


//USERS

routes.post("/signup", UserControllers.signup)
routes.post("/login", UserControllers.login)
routes.get("/user/profile", VerifyJWT, UserControllers.getOwnProfile)
routes.get("/user/:id", VerifyJWT, UserControllers.getProfile)


//RECIPES

routes.post("/recipe", VerifyJWT, RecipeControllers.createRecipe)
routes.get("/recipe/feed", VerifyJWT, RecipeControllers.getFeed)
routes.get("/recipe/:id", VerifyJWT, RecipeControllers.getRecipe)


export default routes