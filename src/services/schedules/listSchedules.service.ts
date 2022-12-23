import AppDataSource from "../../data-source"
import { Address } from "../../entities/adresses.entities"
import { Category } from "../../entities/categories.entities"
import { Property } from "../../entities/properties.entities"
import { AppError } from "../../errors"

const listSchedulesService = async (propertiesId) => {
    const propertyRepository = AppDataSource.getRepository(Property)
    const adressRepository = AppDataSource.getRepository(Address)
    const categoryRepository = AppDataSource.getRepository(Category)

    const property = await propertyRepository.findOneBy({id: propertiesId})

    console.log(property)
    if(!property){
        throw new AppError("Property not found",404)
    }

    // const adresses = await adressRepository
    // .createQueryBuilder('adresses')
    // .getMany()

    const properties = await propertyRepository
    .createQueryBuilder('properties')
    .innerJoinAndSelect('properties.schedules', 'schedules')
    .innerJoinAndSelect('schedules.user', 'user')
    .where('properties.id = :id_property', {id_property:propertiesId})
    .getOne()

    // console.log(properties)

    return properties
}

export default listSchedulesService