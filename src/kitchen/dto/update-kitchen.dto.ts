import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateKitchenDto } from './create-kitchen.dto';
import { IsArray, IsBoolean, IsObject, IsOptional, IsString } from 'class-validator';
import ILocation from 'src/interfaces/location.interface';

export class UpdateKitchenDto extends PartialType(CreateKitchenDto) {
    @ApiPropertyOptional({ example: "وردات الشوكلا" })
    @IsOptional()
    @IsString()
    name: string;

    @ApiPropertyOptional({ example: "نايا عبد الله" })
    @IsOptional()
    @IsString()
    manager: string;

    @ApiPropertyOptional({ example: ["0911123123"] })
    @IsOptional()
    @IsArray()
    phone?: [string];

    @ApiPropertyOptional({ example: "" })
    @IsOptional()
    @IsString()
    managerPhoto: string;


    @ApiPropertyOptional({ example: "" })
    @IsOptional()
    @IsString()
    logo?: string;


    @ApiPropertyOptional({ example: "" })
    @IsOptional()
    @IsString()
    about?: string;


    @ApiPropertyOptional({ example: "" })
    @IsOptional()
    @IsString()
    password: string;

    @ApiPropertyOptional({ example: "63a753f4bee22ac8ccbf14c4" })
    @IsOptional()
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

    @ApiPropertyOptional({ example: true })
    @IsOptional()
    @IsBoolean()
    isOpen: boolean;


}
