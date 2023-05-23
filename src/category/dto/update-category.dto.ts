import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateCategoryDto } from './create-category.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
    @ApiPropertyOptional({ example: "مخللات" })
    @IsOptional()
    @IsString()
    name?: string;

    @ApiPropertyOptional({ example: "http://res.cloudinary.com/refq/image/upload/v1672052714/xmmadbhrdwxtdqhxxbcc.jpg" })
    @IsOptional()
    @IsString()
    url?: string;
}
