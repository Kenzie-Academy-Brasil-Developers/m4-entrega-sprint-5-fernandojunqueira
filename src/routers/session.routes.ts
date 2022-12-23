import { Router } from "express";
import { createSessionController } from "../controllers/session.controllers";
import checkIsActiveMiddleware from "../middlewares/checkIsActive.middlewares";
 
const sessionRouter = Router()

sessionRouter.post("",createSessionController)

export default sessionRouter