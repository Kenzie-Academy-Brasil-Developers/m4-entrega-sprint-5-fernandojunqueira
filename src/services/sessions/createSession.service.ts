import { IUserLogin } from "../../interfaces/users"
import { compare } from "bcryptjs"
import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entities"
import { AppError } from "../../errors"
import jwt from "jsonwebtoken"
import "dotenv/config"

const createSessionService = async ({email,password}:IUserLogin):Promise<string> => {
    const userRepo = AppDataSource.getRepository(User)
    const user = await userRepo.findOneBy({email: email})
    
    if(!user){
        throw new AppError('Wrong email/password', 403)
    }
    const passwordMatch = await compare(password,user.password)

    if(!passwordMatch){
        throw new AppError('Wrong email/password', 403)
    }
   
    if(!user.isActive){
        throw new AppError('Not active', 400)
    }

    const token = jwt.sign(
        {
            isAdm: user.isAdm,
            isActive: user.isActive
        },
        process.env.SECRET_KEY,
        {   
            subject: user.id,
            expiresIn: "24h"
        }
    )

    return token
    
}

export default createSessionService