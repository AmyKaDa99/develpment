import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';
import { Unit, UnitDocument } from './entities/unit.entity';


@Injectable()
export class UnitService {
  constructor(
    @InjectModel(Unit.name) private UnitModel: Model<UnitDocument>
  ) { }

  async create(createUnitDto: CreateUnitDto) {
    const createUnit = new this.UnitModel(createUnitDto);
    await createUnit.save()
  }

  async findAll() {
    return await this.UnitModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} unit`;
  }

  update(id: number, updateUnitDto: UpdateUnitDto) {
    return `This action updates a #${id} unit`;
  }

  remove(id: number) {
    return `This action removes a #${id} unit`;
  }
}
