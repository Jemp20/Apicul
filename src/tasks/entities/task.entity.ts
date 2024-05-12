import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ nullable: false }) 
    taskCategoryId: number;
    @Column({ nullable: false }) 
    taskStatusId: number;
    @Column({ nullable: false }) 
    userId: number;
    @Column() 
    description: string;
    @Column() 
    color: string;
}
