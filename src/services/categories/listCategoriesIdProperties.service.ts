import AppDataSource from "../../data-source";
import { Category } from "../../entities/categories.entities";
import { AppError } from "../../errors";

const listCategoriesIdPropertiesService = async (categoryId:string) => {
    const categoryRepo = AppDataSource.getRepository(Category)
    const validId = await categoryRepo.findOneBy({id:categoryId })

    if(!validId){
        throw new AppError("Category already exists", 404)
    }

    const categories =  await categoryRepo.findOne({
        where: {
            id: categoryId
        },
        relations: {
            properties: true
        },
  
    })
    
    return categories;
}

export default listCategoriesIdPropertiesService