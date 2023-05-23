/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { KitchenService } from './kitchen.service';
import { CreateKitchenDto } from './dto/create-kitchen.dto';
import { UpdateKitchenDto } from './dto/update-kitchen.dto';

@ApiTags('kitchen')
@Controller('kitchen')
export class KitchenController {
  constructor(private readonly kitchenService: KitchenService) { }

  @Post()
  create(@Body() createKitchenDto: CreateKitchenDto) {
    this.kitchenService.create(createKitchenDto);
  }


  @Get('/all')
  async findAll() {
    return await this.kitchenService.findAll();
  }

  @Get('dashboard/all')
  async findAllDashboard() {
    return await this.kitchenService.findAllDashboard();
  }

  @Get('dashboard/name/:name')
  findByNameForDashboard(@Param('name') name: string) {
    return this.kitchenService.findByNameForDashboard(name);
  }

  @Get('dashboard/:id')
  findOneDashboard(@Param('id') id: string) {
    return this.kitchenService.findOneDashboard(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kitchenService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKitchenDto: UpdateKitchenDto) {
    this.kitchenService.update(id, updateKitchenDto).then(function (accumulator) {
      if (accumulator) return 'done'
      if (!accumulator) throw new HttpException('connect with Aminah', HttpStatus.BAD_REQUEST)
    });;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.kitchenService.remove(id).then(function (accumulator) {
      if (accumulator) return 'done'
      if (!accumulator) throw new HttpException('connect with Aminah', HttpStatus.BAD_REQUEST)
    });;
  }
}

