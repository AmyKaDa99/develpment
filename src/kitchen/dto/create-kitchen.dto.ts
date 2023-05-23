import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsNumber, IsString, IsDateString, IsNotEmpty, IsArray, IsObject, IsBoolean } from "class-validator";
import ILocation from "src/interfaces/location.interface";

export class CreateKitchenDto {
    @ApiProperty({ example: "وردات الشوكلا" })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ example: "نايا عبد الله" })
    @IsNotEmpty()
    @IsString()
    manager: string;

    @ApiProperty({ example: ["0911123123"] })
    @IsNotEmpty()
    @IsArray()
    phone?: [string];

    @ApiPropertyOptional({ example: "" })
    @IsOptional()
    @IsString()
    managerPhoto: string;

    @ApiPropertyOptional({ example: true })
    @IsOptional()
    @IsBoolean()
    isOpen: boolean;


    @ApiPropertyOptional({ example: "" })
    @IsOptional()
    @IsString()
    logo?: string;


    @ApiPropertyOptional({ example: "" })
    @IsOptional()
    @IsString()
    about?: string;


    @ApiProperty({ example: "" })
    @IsNotEmpty()
    @IsString()
    password: string;

    @ApiProperty({ example: "63a753f4bee22ac8ccbf14c4" })
    @IsNotEmpty()
    @IsString()
    regionId: string;


    @ApiPropertyOptional({
        example: [
            "63acd91d0d958d63ed777e83"
        ]
    })
    @IsOptional()
    @IsArray()
    categories: string[];

    @ApiPropertyOptional({
        example:
        {
            type: "Point",
            coordinates: [-73.856077, 40.848447]
        }

    })
    @IsOptional()
    @IsObject()
    location: ILocation;

    @ApiPropertyOptional({ example: "جانب مفرق البريد" })
    @IsOptional()
    @IsString()
    address?: string;

    @ApiPropertyOptional({ example: ["السبت", "الأحد"] })
    @IsOptional()
    @IsArray()
    days?: string[];

}
