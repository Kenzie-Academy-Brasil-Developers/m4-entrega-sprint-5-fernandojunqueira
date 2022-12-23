import { Router } from "express";
import { createCategoriesController, listCategoriesController, listCategoriesIdPropertiesController } from "../controllers/categories.controllers";
import { checkIsAdmMiddleware, ensureAuthMiddleware } from "../middlewares";

const categoriesRoutes = Router()

categoriesRoutes.post("",ensureAuthMiddleware,checkIsAdmMiddleware,createCategoriesController)
categoriesRoutes.get("",listCategoriesController)
categoriesRoutes.get("/:id/properties",listCategoriesIdPropertiesController)

export default categoriesRoutes