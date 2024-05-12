import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TasksStatus {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    Description: string;
}
