import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsObject, IsOptional, IsString, } from "class-validator";
import ILocation from "src/interfaces/location.interface";

export class CreateReorderDto {

    @ApiPropertyOptional({ example: "63bf0d5d1b211248b6a30a03" })
    @IsNotEmpty()
    @IsString()
    orderID?: string;

    @ApiPropertyOptional({ example: "2023-01-10T18:21:44.090Z" })
    @IsNotEmpty()
    @IsString()
    deliveredDate: Date;

    @ApiPropertyOptional({ example: "63a753f4bee22ac8ccbf14c4" })
    @IsOptional()
    @IsString()
    regionId: string;

    @ApiPropertyOptional({ example: "هون" })
    @IsOptional()
    @IsString()
    locationDetails: string;


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

}
