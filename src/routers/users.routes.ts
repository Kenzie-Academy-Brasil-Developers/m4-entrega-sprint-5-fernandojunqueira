import { Router } from "express";
import 
{ 
    checkEmailDuplicateMiddlewares, 
    checkIsAdmMiddleware, 
    ensureAuthMiddleware 
} 
from "../middlewares";
import {ensureDataIsValidMiddleware} from "../middlewares";
import checkIsActiveMiddleware from "../middlewares/checkIsActive.middlewares";
import verifyDataMiddleware from "../middlewares/verifyData.middlewares";
import { userSchema, userUpdateSchema } from "../schemas";
import 
{ 
    createUserController,
    deleteUserController, 
    listUsersController, 
    updateUserController 
} 
from "../controllers/users.controllers";

const usersRouter = Router()

usersRouter.post("",ensureDataIsValidMiddleware(userSchema),checkEmailDuplicateMiddlewares,createUserController)
usersRouter.get("",ensureAuthMiddleware,checkIsAdmMiddleware,listUsersController)
usersRouter.patch("/:id",verifyDataMiddleware,ensureAuthMiddleware,ensureDataIsValidMiddleware(userUpdateSchema),ensureDataIsValidMiddleware(userUpdateSchema),updateUserController)
usersRouter.delete("/:id",ensureAuthMiddleware,checkIsAdmMiddleware,checkIsActiveMiddleware,deleteUserController)

export default usersRouter