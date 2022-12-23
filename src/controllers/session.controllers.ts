import { Request, Response } from "express"
import { IUserLogin } from "../interfaces/users"
import { createSessionServices } from "../services"

export const createSessionController = async (req:Request,res:Response) => {
    const sessionData:IUserLogin = req.body
    const token = await createSessionServices(sessionData)
    return res.json({token})
}