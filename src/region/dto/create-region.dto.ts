import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class CreateRegionDto {
    @ApiPropertyOptional({ example: "الميدان" })
    @IsOptional()
    @IsString()
    name?: string;
}