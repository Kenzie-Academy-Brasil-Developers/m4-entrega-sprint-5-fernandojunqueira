export interface IScheduleRequest {
    userId: string
    propertyId: string
    date: string
    hour: string
}

export interface IScheduleBody{
    date: string
    hour: string
    propertyId: string
}