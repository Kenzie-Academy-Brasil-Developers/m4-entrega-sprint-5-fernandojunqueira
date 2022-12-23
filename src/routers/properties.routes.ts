import { Router } from "express";
import { createPropertyController, listPropertyController } from "../controllers/properties.controller";
import { checkIsAdmMiddleware, ensureAuthMiddleware } from "../middlewares";

const propertiesRoutes = Router()

propertiesRoutes.post("",ensureAuthMiddleware, checkIsAdmMiddleware, createPropertyController)
propertiesRoutes.get("",listPropertyController )

export default propertiesRoutes