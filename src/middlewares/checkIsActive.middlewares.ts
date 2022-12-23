import { Request, Response, NextFunction } from "express"

const checkIsActiveMiddleware = (req: Request, response: Response , next:NextFunction) => {
    const user:any = req.user
    
    if(!user.isActive){
        return response.status(403).json({message:"User is not Active"})
    }

    return next()
}

export default checkIsActiveMiddleware
