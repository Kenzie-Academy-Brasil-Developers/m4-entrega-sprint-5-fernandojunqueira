import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entities";
import { IUserRequest, IUserResponse} from "../../interfaces/users";
import { userWithoutPasswordSchema } from "../../schemas";

const createUserService = async (payload:IUserRequest): Promise<IUserResponse> => {

    const userRepo = AppDataSource.getRepository(User)
    let user = userRepo.create(payload)

    await userRepo.save(user)

    const userWithoutPassword =  await userWithoutPasswordSchema.validate(user,{stripUnknown:true})

    return userWithoutPassword

}

export default createUserService