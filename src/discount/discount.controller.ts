import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DiscountService } from './discount.service';
import { CreateDiscountDto } from './dto/create-discount.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';
import { MealService } from 'src/meal/meal.service';

@ApiTags("Discount")
@Controller('discount')
export class DiscountController {
  constructor(
    private readonly discountService: DiscountService,
    private readonly mealService: MealService,
  ) { }

  @Post()
  async create(@Body() createDiscountDto: CreateDiscountDto) {
    const mealDoc = await this.mealService.findOne(createDiscountDto.mealId) as any
    if (!mealDoc) throw new HttpException('there is no meal with this id', HttpStatus.CONFLICT)
    if (mealDoc.discount) throw new HttpException('there is already offer on this meal', HttpStatus.CONFLICT)
    createDiscountDto.kitchenId = mealDoc.kitchenId
    createDiscountDto.isDeleted = false
    await this.discountService.create(createDiscountDto);
    this.mealService.updateDiscountStatus(createDiscountDto.mealId, true, createDiscountDto.percent)
    return 'done'
  }


  @Get()
  findAll() {
    return this.discountService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.discountService.findOne(id);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    this.discountService.remove(id)
  }

}
