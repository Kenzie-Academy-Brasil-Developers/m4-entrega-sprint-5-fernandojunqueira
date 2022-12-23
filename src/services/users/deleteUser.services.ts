import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entities"
import { AppError } from "../../errors"

const deleteUserServices = async (id:string) => {
    const userRepo = AppDataSource.getRepository(User)
    const user = await userRepo.findOneBy({id:id})
    if(!user){
        throw new AppError("Invalid id", 404)
    }
    if(!user.isActive){
        throw new AppError('User is not active', 400)
    }
    user.isActive = false
    await userRepo.save(user)

    return 'Tá chegando'

}

export default deleteUserServices