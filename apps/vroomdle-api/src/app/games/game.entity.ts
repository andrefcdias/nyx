import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Image } from "../images/image.entity"

@Entity()
export class Game {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: string

    @Column()
    answer: string

    @OneToMany(() => Image, (image) => image.game)
    images: Image[]
}