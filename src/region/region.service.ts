import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Region, RegionDocument } from './entities/region.entity';

@Injectable()
export class RegionService {
  constructor(
    @InjectModel(Region.name) private RegionModel: Model<RegionDocument>
  ) { }

  async create(createRegionDto: CreateRegionDto) {
    const createRegion = new this.RegionModel(createRegionDto);
    await createRegion.save();
  }

  async findAll() {
    return await this.RegionModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} region`;
  }

  update(id: number, updateRegionDto: UpdateRegionDto) {
    return `This action updates a #${id} region`;
  }

  remove(id: number) {
    return `This action removes a #${id} region`;
  }
}
