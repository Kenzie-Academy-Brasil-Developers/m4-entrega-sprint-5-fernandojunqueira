import { Request,Response } from "express"
import { IUserUpdate } from "../interfaces/users"
import 
{ 
    createUserService, 
    updateUserService, 
    listUsersService, 
    deleteUserService 
} 
from "../services";

export const createUserController = async (req: Request, res: Response) => {
    const user = await createUserService(req.body)
    return res.status(201).json(user)
}

export const updateUserController = async (req: Request, res: Response) => {
    const userData: IUserUpdate = req.body
    const userId = req.params.id
    const updatedUser = await updateUserService(userData, userId)
    return res.json(updatedUser)
}


export const listUsersController = async (req:Request, res:Response) => {
    const  data = await listUsersService()
    return res.status(201).json(data)
}


export const deleteUserController = async (req: Request, res:Response) => {
  
    const userId:string = req.params.id
    await deleteUserService(req.params.id)
    return res.status(204).json()
}
