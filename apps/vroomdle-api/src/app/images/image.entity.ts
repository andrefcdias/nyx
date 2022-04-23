import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Game } from '../games/game.entity';

@Entity()
export class Image {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @ManyToOne(() => Game, (game) => game.id)
    gameId: number

    @Column("blob")
    image: any
}