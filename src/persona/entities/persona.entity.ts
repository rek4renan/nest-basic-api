import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Persona {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:8})
    dni: string;

    @Column({length:50})
    name: string;

    @Column({length:50})
    surname: string;
}