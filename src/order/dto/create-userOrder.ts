import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsObject, IsOptional, IsString, } from "class-validator";
import ILocation from "src/interfaces/location.interface";
import { CreateOrdersDto } from "./create-orders.dto";

export class CreateUserOrderDto {

    @ApiProperty({ example: "" })
    @IsNotEmpty()
    @IsString()
    userId: string;

    @ApiProperty({ example: "2023-01-10T18:21:44.090Z" })
    @IsNotEmpty()
    @IsString()
    deliveredDate: Date;

    @ApiProperty({ example: "63a753f4bee22ac8ccbf14c4" })
    @IsNotEmpty()
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

    @ApiProperty({
        example: [{
            kitchenId: "",
            price: "",
            baskets: [
                {
                    mealId: "",
                    numberOfItems: "",
                    totalPrice: "",
                    details: ""
                }
            ]
        }]
    })
    @IsNotEmpty()
    @IsArray()
    orders: CreateOrdersDto[];

}
