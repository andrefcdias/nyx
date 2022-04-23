import { Controller, Get, Post } from '@nestjs/common';
import { Game } from './game.entity';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {
    constructor(private gamesService: GamesService) { }

    @Get()
    get() {
        return {
            id: 1,
            date: "",
            answer: "Spa Francochamps",
            images: [1, 2, 3, 4, 5, 6]
        }
    }
}
