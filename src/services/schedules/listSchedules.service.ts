import AppDataSource from "../../data-source"
import { Property } from "../../entities/properties.entities"
import { AppError } from "../../errors"

const listSchedulesService = async (propertiesId:string):Promise<Property> => {
    const propertyRepository = AppDataSource.getRepository(Property)

    const property = await propertyRepository.findOneBy({id: propertiesId})

    if(!property){
        throw new AppError("Property not found",404)
    }

    const properties = await propertyRepository
    .createQueryBuilder('properties')
    .innerJoinAndSelect('properties.schedules', 'schedules')
    .innerJoinAndSelect('schedules.user', 'user')
    .where('properties.id = :id_property', {id_property:propertiesId})
    .getOne()

    return properties
}

export default listSchedulesService