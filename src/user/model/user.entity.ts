import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    userId: string;

    @Column()
    phone: string;

}
