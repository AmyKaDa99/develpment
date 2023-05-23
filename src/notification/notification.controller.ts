import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  Request,
} from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { NotificationService } from "./notification.service";
import { CreateNotificationDto } from "./dto/create-notification.dto";
import { UpdateNotificationDto } from "./dto/update-notification.dto";

@Controller("notification")
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) { }


  @Get()
  async findAll(
    @Query() { page, limit }: any,
    @Request() req: any,
  ) {
    const payload = {
      'notification': {
        'title': `jj`,
        'body': `jhff`,
      }, 
      'data': { 
            'personSent': "userSent" 
      }
    };

    return await this.notificationService.sendSingleNotification(payload, 
      'f_kZV4xxS2eNMg5TUFcEd6:APA91bFP8ilITLUnB0Fz3N0F6lGFP9GNICEfJU9SmklBa3N4CYILFyL_xE0uuUtXuvp56ajj_f9SU-EBnDrzUQk-7LXWNPG1lYN5XzcIAs-u7uk1HVXn_Wh-2InGDJZwe_s-nSBBrMEx');
  }


  @Get('dashboard')
  async findAllForDashboard(){
    return await this.notificationService.findALlForDashboard()
  }


  @Get('user/:id')
  async findAllForUser(@Param('id') id: string){
    return await this.notificationService.findForUser(id)
  }

}
