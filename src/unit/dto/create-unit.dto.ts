import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateUnitDto {
    @ApiProperty({ example: "قطعة" })
    @IsNotEmpty()
    @IsString()
    name: string;
}