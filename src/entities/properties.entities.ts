import { PrimaryGeneratedColumn, Column, Entity, OneToOne, JoinColumn, ManyToOne, CreateDateColumn, OneToMany } from "typeorm";
import {Address} from "./adresses.entities";
import { Category } from "./categories.entities";
import { PropertyToUser } from "./usersToProperties.entities";

@Entity("properties")
export class Property{

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({default:false})
    sold: boolean

    @Column({type:"float"})
    value: number

    @Column()
    size: number

    @CreateDateColumn()
    createdAt: Date
    
    @CreateDateColumn()
    updatedAt: Date

    @OneToOne(() => Address, (adresses) => adresses.properties)
    @JoinColumn()
    address: Address

    @ManyToOne(() => Category, (categories) => categories.properties)
    categories: Category

    @OneToMany(() => PropertyToUser, (propertyToUser) => propertyToUser.property)
    schedules : PropertyToUser[]

}

