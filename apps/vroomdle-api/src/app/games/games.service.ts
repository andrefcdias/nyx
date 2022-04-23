import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameDto } from './game.dto';
import { Game } from './game.entity';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game)
    private gamesRepository: Repository<Game>,
  ) { }

  add(gameDto: GameDto) {
    const game = new Game();
    game.date = gameDto.date

    this.gamesRepository.create(game)
  }
}
