import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors";
import { IUserResponse, IUserUpdate } from "../../interfaces/users";
import { userWithoutPasswordSchema } from "../../schemas";

const updateUserService = async (userData: IUserUpdate, userId: string): Promise<IUserResponse> => {

    const userRepo = AppDataSource.getRepository(User)

    const user = await userRepo.findOneBy({id:userId})

    if(!user){
        throw new AppError("Nop", 404)
    }
 
    const updatedUser = userRepo.create({
        ...user,...userData
    })

    await userRepo.save(updatedUser)
    
    const updatedUserWithoutPassword = await userWithoutPasswordSchema.validate(updatedUser,{stripUnknown:true})

    return updatedUserWithoutPassword
}

export default updateUserService