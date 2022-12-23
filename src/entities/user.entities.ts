import { hashSync } from "bcryptjs";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn ,BeforeInsert, OneToMany } from "typeorm";
import { PropertyToUser } from "./usersToProperties.entities";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    isAdm: boolean
    
    @Column({default: true})
    isActive: boolean
    
    @CreateDateColumn()
    createdAt: Date
    
    @UpdateDateColumn()
    updatedAt: Date
    
    @BeforeInsert()
    hashPassword(){
        this.password = hashSync(this.password, 10)
    }

    @OneToMany(() => PropertyToUser, (propertyToUser) => propertyToUser.user)
    schedules : PropertyToUser[]
}