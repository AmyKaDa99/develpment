import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateReviewDto {
    isDelivered?: boolean;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    speedStar?: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    cleanStar?: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    yummyStar?: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    feedback?: string;
    updatedAt?: Date;
}
