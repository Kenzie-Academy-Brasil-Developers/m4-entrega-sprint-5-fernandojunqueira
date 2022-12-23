import { Request, Response, NextFunction } from "express"

const verifyDataMiddleware = (req: Request, response: Response , next:NextFunction) => {
    const body = req.body

    if(body.isActive !== undefined || body.isAdm !== undefined || body.id !== undefined){
        return response.status(401).json({message:"Nop"})
    }

    return next()
}

export default verifyDataMiddleware
