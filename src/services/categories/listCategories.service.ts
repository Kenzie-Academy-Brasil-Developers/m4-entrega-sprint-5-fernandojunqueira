import AppDataSource from "../../data-source";
import { Category } from "../../entities/categories.entities";

const listCategoriesService = async () => {
    const categoryRepo = AppDataSource.getRepository(Category)
    const categories = await categoryRepo.find()
    
    return categories;
}

export default listCategoriesService