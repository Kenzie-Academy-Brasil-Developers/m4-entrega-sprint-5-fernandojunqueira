import { Request,Response } from "express"
import { IUserUpdate } from "../interfaces/users"
import 
{ 
    createUserServices, 
    updateUserServices, 
    listUsersServices, 
    deleteUserServices 
} 
from "../services";

export const createUserController = async (req: Request, res: Response) => {
    const user = await createUserServices(req.body)
    return res.status(201).json(user)
}

export const updateUserController = async (req: Request, res: Response) => {
    const userData: IUserUpdate = req.body
    const userId = req.params.id
    const updatedUser = await updateUserServices(userData, userId)
    return res.json(updatedUser)
}


export const listUsersController = async (req:Request, res:Response) => {
    const  data = await listUsersServices()
    return res.status(201).json(data)
}


export const deleteUserController = async (req: Request, res:Response) => {
  
    const deleteUser = await deleteUserServices(req.params.id)

    return res.status(204).json({})
}
