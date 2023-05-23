import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryDocument } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private CategoryModel: Model<CategoryDocument>
  ) { }

  async create(createCategoryDto: CreateCategoryDto) {
    const createCategory = new this.CategoryModel(createCategoryDto);
    await createCategory.save();
  }

  async findAll() {
    return await this.CategoryModel.find();
  }


  update(id: string, updateCategoryDto: UpdateCategoryDto) {
      this.CategoryModel.updateOne({ _id: id }, updateCategoryDto)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
  

  remove(id: string) {
    this.CategoryModel.deleteOne({ _id: id }).then((res) => console.log(res)).catch((err) => console.log(err))

  }
}
