import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class CreateCategoryDto {
    @ApiPropertyOptional({ example: "مخللات" })
    @IsOptional()
    @IsString()
    name?: string;

    @ApiPropertyOptional({ example: "http://res.cloudinary.com/refq/image/upload/v1672052714/xmmadbhrdwxtdqhxxbcc.jpg" })
    @IsOptional()
    @IsString()
    url?: string;
}