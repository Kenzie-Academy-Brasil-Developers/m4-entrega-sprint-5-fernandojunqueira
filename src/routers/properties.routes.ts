import { Router } from "express";
import { createPropertyController, listPropertyController } from "../controllers/properties.controller";
import { checkIsAdmMiddleware, ensureAuthMiddleware } from "../middlewares";

const propertiesRoutes = Router()

propertiesRoutes.post("", createPropertyController)
propertiesRoutes.get("",listPropertyController )

//Apaguei do .post as funções checkIsAdmMiddleware e ensureAuthMiddleware pra fazer testes de aprendizado.

export default propertiesRoutes