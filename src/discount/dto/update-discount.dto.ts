import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateDiscountDto } from './create-discount.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateDiscountDto extends PartialType(CreateDiscountDto) {
    @ApiProperty({ example: "63acdca2bddbb9c30159e0bf" })
    @IsNotEmpty()
    @IsString()
    mealId: string;

    @ApiPropertyOptional({ example: "63a980309909c0720c6891ef" })
    @IsOptional()
    @IsString()
    kitchenId: string;

    @ApiPropertyOptional({ example: "50" })
    @IsOptional()
    @IsString()
    percent: string;
}
