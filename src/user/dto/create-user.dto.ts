import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsObject, IsOptional, IsString } from "class-validator";
import ILocation from "src/interfaces/location.interface";

export class CreateUserDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    phone: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    fcm: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    password: string;

    @ApiProperty({ example: "63a753f4bee22ac8ccbf14c4" })
    @IsNotEmpty()
    @IsString()
    region: string;

    @ApiPropertyOptional({
        example: [
            {
                type: "Point",
                coordinates: [-73.856077, 40.848447]
            }
        ]
    })
    @IsOptional()
    @IsArray()
    address: ILocation[];


    refreshToken?: string;


}

