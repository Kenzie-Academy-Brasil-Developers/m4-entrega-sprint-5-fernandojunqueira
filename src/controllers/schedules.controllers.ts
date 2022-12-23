import { IScheduleBody } from "../interfaces/schedules"
import { IUserToken } from "../interfaces/users"
import { createSchedulesService, listSchedulesService } from "../services"
import { Response, Request } from "express"

export const createSchedulesController = async (req: Request, res: Response) => {
    const body:IScheduleBody = req.body
    const user:any = req.user
    const schedule = await createSchedulesService(body, user.id)
    return res.status(201).json(schedule)
}

export const listSchedulesController = async (req: Request, res: Response) => {
    console.log(req.params.id)
    const schedules = await listSchedulesService(req.params.id)
    return res.status(200).json(schedules)
}