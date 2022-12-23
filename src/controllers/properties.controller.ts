import { Response, Request } from "express"
import { IPropertyRequest } from "../interfaces/properties"
import { createPropertyService, listPropertyService } from "../services"


export const createPropertyController = async (req: Request,res:Response) => {
    const body:IPropertyRequest = req.body
    const property = await createPropertyService(body)
    return res.status(201).json(property)
}

export const listPropertyController =async (req:Request, res: Response) => {
    
    const properties = await listPropertyService()
    return res.status(200).json(properties)
}
