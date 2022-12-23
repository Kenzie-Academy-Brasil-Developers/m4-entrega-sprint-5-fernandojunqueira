import { Request, Response, NextFunction } from "express"
import AppDataSource from "../data-source"
import { User } from "../entities/user.entities"
import { IUserRequest } from "../interfaces/users"

const checkEmailDuplicateMiddlewares = async (req:Request,res:Response, next:NextFunction) => {
    
    
        const userData:IUserRequest = req.body
       
        const userRepo = AppDataSource.getRepository(User)
        
        const users = await userRepo.findOneBy({email: userData.email})
        
        if(users){
            return res.status(409).json({message: "E-mail already registered"})
        }

        return next()
   

}

export default checkEmailDuplicateMiddlewares