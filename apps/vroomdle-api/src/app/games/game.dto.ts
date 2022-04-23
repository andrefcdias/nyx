import { ImageDto } from "../images/image.dto"

export class GameDto {
    date: string
    answer: string
    images: ImageDto[]
}