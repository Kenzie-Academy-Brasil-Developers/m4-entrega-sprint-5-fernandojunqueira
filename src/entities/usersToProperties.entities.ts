import { Entity, PrimaryGeneratedColumn , Column , ManyToOne   } from "typeorm";
import { Property } from "./properties.entities";
import { User } from "./user.entities";

@Entity("schedules_user_properties")
export class PropertyToUser{

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({type:"date"})
    date: string

    @Column({type:"time"})
    hour: string 

    @ManyToOne(() => Property, (property) => property.schedules )
    property: Property

    @ManyToOne(() => User, (user) => user.schedules )
    user:User
}