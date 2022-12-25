import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entities"
import { IUserResponse } from "../../interfaces/users"
import { listUsers } from "../../schemas"

const listUsersService = async ():Promise<IUserResponse[]> => {
    const userRepo = AppDataSource.getRepository(User)
    const users = await userRepo.find()
    
    const usersWithoutPassword =  await listUsers.validate(users,{stripUnknown:true})
 

    return usersWithoutPassword;
}

export default listUsersService