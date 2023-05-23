import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsBoolean, IsNotEmpty, IsObject, IsOptional, IsString, IsUrl } from "class-validator";
import IIngredientWithDetails from "src/interfaces/ingredientWithDetails.interface";

export class CreateMealDto {

    @ApiProperty({ example: "تشيز كيك" })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiPropertyOptional({ example: "هون اجتمع الشكل اللطيف مع الحشوات الطيبة متوفرة حشوة .." })
    @IsOptional()
    @IsString()
    details: string;


    @ApiProperty({ example: "20000" })
    @IsNotEmpty()
    @IsString()
    price: string;


    @ApiPropertyOptional({ example: "4" })
    @IsOptional()
    @IsString()
    amount: string;


    @ApiPropertyOptional({ example: "63a89ddc45954a728a8cb934" })
    @IsOptional()
    @IsString()
    unitId: string;


    @ApiProperty({ example: "63bdacc1b7ec357762e62a17" })
    @IsNotEmpty()
    @IsString()
    kitchenId: string;

    @ApiPropertyOptional({ example: "63acd91d0d958d63ed777e83" })
    @IsOptional()
    @IsString()
    categoryId: string;

   // @ApiProperty({ example: "http://res.cloudinary.com/refq/image/upload/v1672052714/xmmadbhrdwxtdqhxxbcc.jpg" })
   // @IsNotEmpty()
   // @IsUrl()
   // url: string;

    @ApiProperty({ example: ["http://res.cloudinary.com/refq/image/upload/v1672052714/xmmadbhrdwxtdqhxxbcc.jpg"] })
    @IsNotEmpty()
    @IsArray()
    urls: string[];

    @ApiProperty({ example: "6 hours" })
    @IsNotEmpty()
    @IsString()
    cookTime: string;

    @ApiPropertyOptional({ example: "20000 من أجل علبة تحتوي على 4 قطع " })
    @IsOptional()
    @IsString()
    priceDetails: string;


    @ApiPropertyOptional({
        example: [
            "63acd9dd0d958d63ed777e87",
            "63acd9e60d958d63ed777e89",
            "63acd9ef0d958d63ed777e8b",
            "63acd9f70d958d63ed777e8d"
        ]
    })
    @IsOptional()
    @IsArray()
    ingredients: string[];

    @ApiPropertyOptional({
        example: [
            {
                amount: "200",
                unitId: "63acda9d0d958d63ed777e90",
                unit: "غرام",
                ingredientId: "63acd9dd0d958d63ed777e87",
                ingredient: "سكر"
            }, {
                amount: "200",
                unitId: "63acda9d0d958d63ed777e90",
                unit: "غرام",
                ingredientId: "63acd9e60d958d63ed777e89",
                ingredient: "كريما"
            }, {
                amount: "200",
                unitId: "63acda9d0d958d63ed777e90",
                unit: "غرام",
                ingredientId: "63acd9ef0d958d63ed777e8b",
                ingredient: "قشطة"
            }, {
                amount: "200",
                unitId: "63acda9d0d958d63ed777e90",
                unit: "غرام",
                ingredientId: "63acd9f70d958d63ed777e8d",
                ingredient: "مربى"
            }
        ]
    })
    @IsOptional()
    @IsArray()
    ingredientsDetails: IIngredientWithDetails[];


    @ApiPropertyOptional({ example: true })
    @IsOptional()
    @IsBoolean()
    isAvailable: boolean;


}

