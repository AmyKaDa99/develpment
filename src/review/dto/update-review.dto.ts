import { PartialType } from '@nestjs/swagger';
import { CreateReviewDto } from './create-review.dto';
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";


export class UpdateReviewDto extends PartialType(CreateReviewDto) {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    star?: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    feedback?: string;
    createdAt?: Date;
}
