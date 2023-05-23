import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { Ingredient, IngredientDocument } from './entities/ingredient.entity';

@Injectable()
export class IngredientService {
  constructor(
    @InjectModel(Ingredient.name) private IngredientModel: Model<IngredientDocument>
  ) { }

  async create(createIngredientDto: CreateIngredientDto) {
    const createIngredient = new this.IngredientModel(createIngredientDto);
    await createIngredient.save()
  }

  async findAll() {
    return await this.IngredientModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} ingredient`;
  }

  update(id: number, updateIngredientDto: UpdateIngredientDto) {
    return `This action updates a #${id} ingredient`;
  }

  remove(id: number) {
    return `This action removes a #${id} ingredient`;
  }
}
