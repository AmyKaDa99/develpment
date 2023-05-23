import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateIngredientDto {
    @ApiProperty({ example: "بطاطا" })
    @IsNotEmpty()
    @IsString()
    name: string;
}