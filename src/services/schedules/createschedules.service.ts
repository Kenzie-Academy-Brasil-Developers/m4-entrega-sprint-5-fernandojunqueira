import { date } from "yup"
import AppDataSource from "../../data-source"
import { Property } from "../../entities/properties.entities"
import { User } from "../../entities/user.entities"
import { PropertyToUser } from "../../entities/usersToProperties.entities"
import { AppError } from "../../errors"
import { IScheduleBody } from "../../interfaces/schedules"

const createSchedulesService = async (payload:IScheduleBody,userId:string):Promise<Object> => {
   
    const userRepo = AppDataSource.getRepository(User)
    const propertyRepo = AppDataSource.getRepository(Property)
    const userToPropertyRepo = AppDataSource.getRepository(PropertyToUser)

    const user = await userRepo.findOneBy({id:userId})
    const property = await propertyRepo.findOneBy({id:payload.propertyId})

    const schedule = await userToPropertyRepo.findOneBy({
        hour: payload.hour,
        date: payload.date
    }) 
    

    const hourVerify = Number(payload.hour.split(":")[0])

    const dateVerify = new Date(payload.date).getDay()

    if(dateVerify == 0 || dateVerify ==6){
        throw new AppError("Invalid Date",400)
    }

    if(hourVerify >= 18 || hourVerify < 8){
        throw new AppError("Invalid hour",400)
    }
    if(!property){
        throw new AppError("Property not found",404)
    }

    if(schedule){
        throw new AppError("Property schedule already exists",409)
    }
    
    await userToPropertyRepo.save({
        user,
        property,
        date:payload.date,
        hour: payload.hour
    })

    return {message:"Schedule created"}
}

export default createSchedulesService