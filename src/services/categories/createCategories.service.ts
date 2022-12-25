import AppDataSource from "../../data-source"
import { Category } from "../../entities/categories.entities"
import { AppError } from "../../errors"
import { ICategoryRequest } from "../../interfaces/categories"

const createCategoriesService = async (payload:ICategoryRequest):Promise<Category> => {
   const categoryRepo = AppDataSource.getRepository(Category)
  
   const categoryVerify = await categoryRepo.findOneBy({name: payload.name})

   if(categoryVerify){
      throw new AppError("Category already exists", 409)
  }

   let category = categoryRepo.create(payload)
  
   await categoryRepo.save(category)
   return category
}

export default createCategoriesService