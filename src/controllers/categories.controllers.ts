import { Response , Request } from "express"
import { ICategoryRequest } from "../interfaces/categories/index"
import { createCategoriesService, listCategoriesIdPropertiesService, listCategoriesService } from "../services"

export const createCategoriesController = async (req: Request, res: Response) => {
    const body:ICategoryRequest = req.body
    const category = await createCategoriesService(body)
    return res.status(201).json(category)
}

export const listCategoriesController = async (req: Request, res: Response) => {
    const categories = await listCategoriesService()
    return res.status(200).json(categories)
}

export const listCategoriesIdPropertiesController = async (req: Request, res: Response) => {
    const categoryId:string = req.params.id
    const categories = await listCategoriesIdPropertiesService(categoryId)
    return res.status(200).json(categories)
}