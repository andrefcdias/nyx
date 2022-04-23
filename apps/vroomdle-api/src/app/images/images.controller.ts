import { Controller, Get, Param, Res } from '@nestjs/common';
import { ImagesService } from './images.service';
import { join } from "path";

@Controller('images')
export class ImagesController {
    constructor(private imagesService: ImagesService) { }

    @Get(":id")
    get(@Param("id") id: string, @Res() res) {
        switch (id) {
            case "1":
                return res.sendFile("spa_1_unknown.jpg", { root: join(__dirname, "assets") })
            case "2":
                return res.sendFile("spa_2_unknown.jpg", { root: join(__dirname, "assets") })
            case "3":
                return res.sendFile("spa_3_les_combes.jpg", { root: join(__dirname, "assets") })
            case "4":
                return res.sendFile("spa_4_les_combes.jpg", { root: join(__dirname, "assets") })
            case "5":
                return res.sendFile("spa_5_eau_rouge.jpg", { root: join(__dirname, "assets") })
            case "6":
                return res.sendFile("spa_6_layout.png", { root: join(__dirname, "assets") })
        }

        return res.status(404).send(id)
    }
}
