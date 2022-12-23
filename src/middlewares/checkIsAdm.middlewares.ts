import { Request, Response, NextFunction } from "express"

const checkIsAdmMiddleware = (req: Request, response: Response , next:NextFunction) => {
    const user:any = req.user
    
    if(!user.isAdm){
        return response.status(403).json({message:"Missing admin permission"})
    }

    return next()
}

export default checkIsAdmMiddleware
