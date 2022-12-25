import { Request, Response } from "express"
import { IUserLogin } from "../interfaces/users"
import { createSessionService } from "../services"

export const createSessionController = async (req:Request,res:Response) => {
    const sessionData:IUserLogin = req.body
    const token = await createSessionService(sessionData)
    return res.json({token})
}