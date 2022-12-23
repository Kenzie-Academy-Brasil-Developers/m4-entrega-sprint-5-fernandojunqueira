import AppDataSource from "../../data-source"
import { Address } from "../../entities/adresses.entities"
import { Category } from "../../entities/categories.entities"
import { Property } from "../../entities/properties.entities"
import { AppError } from "../../errors"
import { IPropertyRequest } from "../../interfaces/properties"

const createPropertyService = async ({value,size,address,categoryId}:IPropertyRequest) => {
    
    const propertyRepo = AppDataSource.getRepository(Property)
    const categoryRepo = AppDataSource.getRepository(Category)
    const adressesRepo = AppDataSource.getRepository(Address)
    
    const category = await categoryRepo.findOneBy({id:categoryId}) 
    const propertyVerify = await adressesRepo.findOneBy({zipCode:address.zipCode})
    
    if(!category){
        throw new AppError("Category not found", 404)
    }
    
    if(address.zipCode.length > 8){
        throw new AppError("Invalid zip code", 400)
    }
    
    if(address.state.length > 2){
        throw new AppError("Invalid state", 400)
    }
    
    if(propertyVerify){
        throw new AppError("Address already exists", 409)
    }
    let addresses =  adressesRepo.create(address)
    await adressesRepo.save(addresses)


    const property = await propertyRepo.save({
        value,
        size,
        address: addresses,
        category: category    
    })
   

    return property
 }
 
 export default createPropertyService