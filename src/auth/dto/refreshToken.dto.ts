import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty } from "class-validator";

export class RefreshTokenDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    refreshToken: string;
}