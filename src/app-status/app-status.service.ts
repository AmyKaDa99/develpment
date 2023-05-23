import { Injectable } from '@nestjs/common';
import { CreateAppStatusDto } from './dto/create-app-status.dto';
import { UpdateAppStatusDto } from './dto/update-app-status.dto';
import { InjectModel } from '@nestjs/mongoose';
import { AppStatus, AppStatusDocument } from './entities/app-status.entity';
import { Model } from 'mongoose';

@Injectable()
export class AppStatusService {

  constructor(
    @InjectModel(AppStatus.name) private AppStatusModel: Model<AppStatusDocument>
  ) { }

  async create(createAppStatusDto: CreateAppStatusDto) {
    const createAppStatus = new this.AppStatusModel(createAppStatusDto);
    await createAppStatus.save();
  }

  async findHomeyStatus(){
    return await this.AppStatusModel.findOne({name: 'بيتوتي'})
  }

  async updateHomeyStatus(updateAppStatusDto: UpdateAppStatusDto) {
     await this.AppStatusModel.updateOne({name: 'بيتوتي'}, {
      isOpen: updateAppStatusDto.isOpen
    }).then(res => console.log(res)).catch(err => console.log(err))

  }


}
