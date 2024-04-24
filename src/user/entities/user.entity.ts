import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  Adress: string;
  @Column()
  Phonenumber: string;
  @Column()
  email: string;
  @Column({ default: true })
  isActive: boolean;
}