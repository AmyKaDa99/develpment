import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateMealDto } from './create-meal.dto';
import { IsArray, IsBoolean, IsOptional, IsString } from 'class-validator';
import IIngredientWithDetails from 'src/interfaces/ingredientWithDetails.interface';

export class UpdateMealDto extends PartialType(CreateMealDto) {
    @ApiPropertyOptional({ example: "تشيز كيك" })
    @IsOptional()
    @IsString()
    name: string;

    @ApiPropertyOptional({ example: "هون اجتمع الشكل اللطيف مع الحشوات الطيبة متوفرة حشوة .." })
    @IsOptional()
    @IsString()
    details: string;


    @ApiPropertyOptional({ example: "20000" })
    @IsOptional()
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


    @ApiPropertyOptional({ example: "63a980309909c0720c6891ef" })
    @IsOptional()
    @IsString()
    kitchenId: string;


    @ApiPropertyOptional({ example: "63acd91d0d958d63ed777e83" })
    @IsOptional()
    @IsString()
    categoryId: string;


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
