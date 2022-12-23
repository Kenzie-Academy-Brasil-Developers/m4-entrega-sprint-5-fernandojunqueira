import { Router } from "express";
import { createSchedulesController, listSchedulesController } from "../controllers/schedules.controllers";
import { checkIsAdmMiddleware, ensureAuthMiddleware } from "../middlewares";

const schedulesRoutes = Router()

schedulesRoutes.post("",ensureAuthMiddleware, createSchedulesController)
schedulesRoutes.get("/properties/:id", ensureAuthMiddleware, checkIsAdmMiddleware,listSchedulesController)

export default schedulesRoutes