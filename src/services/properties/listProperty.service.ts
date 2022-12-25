import AppDataSource from "../../data-source"
import { Property } from "../../entities/properties.entities"

const listPropertyService = async ():Promise<Property[]> => {
   
    const propertyRepo =  AppDataSource.getRepository(Property)

    const properties = await propertyRepo.find({
        relations: {
            address: true,
            categories:true
        }
    })


    return properties
}

export default listPropertyService