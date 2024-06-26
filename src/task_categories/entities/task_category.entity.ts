import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TaskCategory {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ nullable: false })
    Description: string;
    @Column()
    Color: string;
}
