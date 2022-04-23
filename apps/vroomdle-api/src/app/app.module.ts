import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Game } from './games/game.entity'
import { Image } from './images/image.entity'
import { GamesModule } from './games/games.module'
import { ImagesModule } from './images/images.module'

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'vroomdle',
            password: '8cWnm3J6tkjTamKMYu7uTJazDuyjVZfc',
            database: 'vroomdle',
            entities: [Game, Image],
            synchronize: true,
        }),
        GamesModule,
        ImagesModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule { }
