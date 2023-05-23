import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class CreateOrderStatusDto {
    @ApiPropertyOptional({ example: "accepted" })
    @IsOptional()
    @IsString()
    name?: string;
}
