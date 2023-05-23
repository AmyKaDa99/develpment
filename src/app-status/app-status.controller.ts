import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AppStatusService } from './app-status.service';
import { CreateAppStatusDto } from './dto/create-app-status.dto';
import { UpdateAppStatusDto } from './dto/update-app-status.dto';

@Controller('app-status')
export class AppStatusController {
  constructor(private readonly appStatusService: AppStatusService) {}


  @Get()
  async findHomeyStatus() {
    const doc =  await this.appStatusService.findHomeyStatus();
    return {
      isOpen: doc.isOpen
    }
  }

  @Patch()
  updateHomeyStatus(@Body() updateAppStatusDto: UpdateAppStatusDto) {
    return this.appStatusService.updateHomeyStatus(updateAppStatusDto)
  }

}
