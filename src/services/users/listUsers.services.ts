import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entities"
import { listUsers } from "../../schemas"

const listUsersServices = async () => {
    const userRepo = AppDataSource.getRepository(User)
    const users = await userRepo.find()
    
    const usersWithoutPassword =  await listUsers.validate(users,{stripUnknown:true})
 

    return usersWithoutPassword;
}

export default listUsersServices