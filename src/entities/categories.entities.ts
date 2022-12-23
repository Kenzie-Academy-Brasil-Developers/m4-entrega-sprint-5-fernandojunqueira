import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from "typeorm";
import { Property } from "./properties.entities";

@Entity("categories")
export class Category{

    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column()
    name:string

    @OneToMany(() => Property, (properties) => properties.categories)
    properties: Property[]
}