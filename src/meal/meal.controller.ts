import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { MealService } from './meal.service';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';


@ApiTags('meal')
@Controller('meal')
export class MealController {
  constructor(private readonly mealService: MealService) { }

  @Post()
  async create(@Body() createMealDto: CreateMealDto) {
    await this.mealService.create(createMealDto);
    return 'done'
  }

  @Get('kitchen/:id')
  findByKitchen(@Param('id') id: string) {
    return this.mealService.findByKitchen(id);
  }

  @Get('category/:id')
  findByCategory(@Param('id') id: string) {
    return this.mealService.findByCategory(id);
  }

  @Get('name/:name')
  findByName(@Param('name') name: string) {
    return this.mealService.findByName(name);
  }


  @ApiQuery({
    name: "name",
    type: String,
    description: "A parameter. Optional",
    required: false
  })
  @ApiQuery({
    name: "categoryId",
    type: String,
    description: "A parameter. Optional",
    required: false
  })
  @Get('filter')
  findByFilter(
    @Query('categoryId') categoryId?: string,
    @Query('name') name?: string
  ) {
    let filter: {
      name?, isAvailable?: boolean, categoryId?: string
    } = {}
    filter.isAvailable = true;
    if (categoryId) filter.categoryId = categoryId
    if (name) filter.name = { $regex: name }
    console.log(filter)
    return this.mealService.findByFilter(filter);
  }

  @Get('dashboard/kitchen/:id')
  findByKitchenForDashboard(@Param('id') id: string) {
    return this.mealService.findByKitchenForDashboard(id);
  }

  @Get('dashboard/category/:id')
  findByCategoryForDashboard(@Param('id') id: string) {
    return this.mealService.findByCategoryForDashboard(id);
  }


  @Get('dashboard/name/:name')
  findByNameForDashboard(@Param('name') name: string) {
    return this.mealService.findByNameForDashboard(name);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMealDto: UpdateMealDto) {
    this.mealService.update(id, updateMealDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.mealService.remove(id)
  }
}
