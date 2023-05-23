import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
export class CreateDiscountDto {

    @ApiProperty({ example: "63acdca2bddbb9c30159e0bf" })
    @IsNotEmpty()
    @IsString()
    mealId: string;

    kitchenId?: string;

    isDeleted?: boolean;

    @ApiProperty({ example: "50" })
    @IsNotEmpty()
    @IsString()
    percent: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    startAt: Date;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    endAt: Date;

}

