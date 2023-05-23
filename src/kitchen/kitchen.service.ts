import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MealService } from 'src/meal/meal.service';
import { CreateKitchenDto } from './dto/create-kitchen.dto';
import { UpdateKitchenDto } from './dto/update-kitchen.dto';
import { Kitchen, KitchenDocument } from './entities/kitchen.entity';

@Injectable()
export class KitchenService {
  constructor(
    @InjectModel(Kitchen.name) private kitchenModel: Model<KitchenDocument>,
    private readonly mealService: MealService,

  ) { }

  async create(createKitchenDto: CreateKitchenDto) {
    const createRecipe = new this.kitchenModel(createKitchenDto);
    return await createRecipe.save();
  }

  async findOne(id: string) {
    return await this.kitchenModel.findOne({ _id: id });
  }

  update(id: string, updateKitchenDto: UpdateKitchenDto) {
    var accumulator: boolean;
    const myPromise = this.kitchenModel.updateOne({ _id: id }, updateKitchenDto)
    return myPromise.then(function (results) {
      console.log(results)
      accumulator = true;
      return accumulator
    }).catch((err) => {
      console.log(err)
      accumulator = false;
      return accumulator
    }
    )
  }

  remove(id: string) {
    var accumulator: boolean;
    const myPromise = this.kitchenModel.deleteOne({ _id: id })
    return myPromise.then(function (results) {
      accumulator = true;
      return accumulator
    }).catch((err) => {
      console.log(err)
      accumulator = false;
      return accumulator
    }
    )
  }

  async findByNameForDashboard(name: string) {
    const populateQuery = [{ path: 'regionId', select: 'name' }, { path: 'categories', select: 'name' }];
    const kitchens = await this.kitchenModel.find({ name: { $regex: name } }).populate(populateQuery)
    const results = kitchens.map(element => {
      let kitchen: {
        _id?, name?, logo?, createdAt?, region?, categories?, isOpen?, days?, address?, location?
      } = {}
      kitchen._id = element._id
      kitchen.name = element.name
      kitchen.logo = element.logo
      kitchen.isOpen = element.isOpen
      kitchen.days = element.days
      kitchen.createdAt = element.createdAt
      kitchen.region = element.regionId
      kitchen.categories = element.categories
      kitchen.address = element.address
      kitchen.location = element.location
      return kitchen
    })
    return results
  }


  async findAll() {
    const populateQuery = [{ path: 'regionId', select: 'name' }, { path: 'categories' }];
    const kitchens = await this.kitchenModel.find({ isOpen: true }, { name: 1, logo: 1, createdAt: 1, categories: 1 }).populate(populateQuery)
    const results = kitchens.map(element => {
      let kitchen: {
        _id?, name?, logo?, createdAt?, region?, categories?
      } = {}
      kitchen._id = element._id
      kitchen.name = element.name
      kitchen.logo = element.logo
      kitchen.createdAt = element.createdAt
      kitchen.region = element.regionId.name
      let categories: string[] = [];
      for (let i = 0; i < element.categories.length; i++) {
        categories.push(element.categories[i].name)
      }
      kitchen.categories = categories;
      return kitchen
    })
    return results
  }

  async findAllDashboard() {
    const populateQuery = [{ path: 'regionId', select: 'name' }, { path: 'categories', select: 'name' }];
    const kitchens = await this.kitchenModel.find({}).populate(populateQuery)
    const results = kitchens.map(element => {
      let kitchen: {
        _id?, name?, logo?, createdAt?, region?, categories?, isOpen?, days?, address?, location?
      } = {}
      kitchen._id = element._id
      kitchen.name = element.name
      kitchen.logo = element.logo
      kitchen.isOpen = element.isOpen
      kitchen.days = element.days
      kitchen.createdAt = element.createdAt
      kitchen.region = element.regionId
      kitchen.categories = element.categories
      kitchen.address = element.address
      kitchen.location = element.location
      return kitchen
    })
    return results
  }

  async findOneDashboard(_id: string) {
    const populateQuery = [{ path: 'regionId', select: 'name' }, { path: 'categories', select: 'name' }];
    const kitchenDoc = await this.kitchenModel.findOne({ _id }).populate(populateQuery)
    const meals = await this.mealService.findByKitchenForDashboard(_id)
    let kitchen: {
      _id?,
      name?,
      logo?,
      createdAt?,
      region?,
      categories?,
      isOpen?,
      days?,
      address?,
      location?
    } = {}
    kitchen._id = kitchenDoc._id
    kitchen.name = kitchenDoc.name
    kitchen.logo = kitchenDoc.logo
    kitchen.isOpen = kitchenDoc.isOpen
    kitchen.days = kitchenDoc.days
    kitchen.createdAt = kitchenDoc.createdAt
    kitchen.region = kitchenDoc.regionId
    kitchen.categories = kitchenDoc.categories
    kitchen.address = kitchenDoc.address
    kitchen.location = kitchenDoc.location

    return { ...kitchen, meals }
  }
}

