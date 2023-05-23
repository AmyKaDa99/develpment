import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { CategoryService } from 'src/category/category.service';
import { DiscountService } from 'src/discount/discount.service';
import { KitchenService } from 'src/kitchen/kitchen.service';
import { RegionService } from 'src/region/region.service';
import { UnitService } from 'src/unit/unit.service';
import { IngredientService } from 'src/ingredient/ingredient.service';
import { OrderStatusService } from 'src/order-status/order-status.service';
import { LOGDto } from './dto/login.dto';
import { MealService } from 'src/meal/meal.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Post('login')
  async login(@Body() login: LOGDto) {
    const bool = await this.userService.logIn(login.phone, login.password, login.fcm)
    if (bool) return bool
    else throw new HttpException('connect with Aminah', HttpStatus.BAD_REQUEST)
    
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}

@Controller('home')
export class HomeController {
  constructor(
    private readonly mealsService: MealService,
    private readonly categoryService: CategoryService,
    private readonly discountService: DiscountService
  ) { }

  @Get()
  async findAll() {
    const [meals, categories, discounts] = await Promise.all([
      this.mealsService.findByDate(), this.categoryService.findAll(), this.discountService.findAll()
    ])
    return { discounts, categories, meals }
  }

}


@Controller('constant')
export class ConstantController {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly regionService: RegionService,
    private readonly unitService: UnitService,
    private readonly ingredientService: IngredientService,
    private readonly orderStatusService: OrderStatusService
  ) {
  }

  @Get()
  async findAll() {
    const [regions, categories, units, ingredients, orderStatus] = await Promise.all([
      this.regionService.findAll(),
      this.categoryService.findAll(),
      this.unitService.findAll(),
      this.ingredientService.findAll(),
      this.orderStatusService.findAll()
    ]
    )
    return {
      regions, categories, units, ingredients, orderStatus, days: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
    }
  }
}
