import { PrimaryGeneratedColumn, OneToOne ,Column, Entity  } from "typeorm";
import {Property} from "./properties.entities";

@Entity("adresses")
export class Address{
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    district: string

    @Column()
    zipCode: string

    @Column({nullable:true})
    number?: string

    @Column()
    city: string

    @Column()
    state: string

    @OneToOne(() => Property, (properties) => properties.address)
    properties: Property
 
}

