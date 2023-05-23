import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';
import { Meal, MealDocument } from './entities/meal.entity';
import { IMeal } from 'src/interfaces/meal.interface';

@Injectable()
export class MealService {
  constructor(
    @InjectModel(Meal.name) private MealModel: Model<MealDocument>
  ) { }

  async create(createMealDto: CreateMealDto) {
    const createMeal = new this.MealModel(createMealDto);
    await createMeal.save();

  }

  async findByKitchenForDashboard(id: string) {
    const populateQuery = [{ path: 'unitId' }, { path: 'categoryId' }, { path: 'ingredients' }]
    const meals = await this.MealModel.find({ kitchenId: id }).populate(populateQuery);
    const results = meals.map(element => {
      let meal: {
        _id?,
        isAvailable?,
        name?,
        details?,
        price?,
        urls?,
        amount?,
        unitId?,
        categoryId?,
        ingredients?,
        discount?,
        oldPrice?,
        newPrice?,
        percent?,
        cookTime?,
        priceDetails?,
        ingredientsDetails?
      } = {}
      meal._id = element._id;
      meal.isAvailable = element.isAvailable;
      meal.name = element.name;
      meal.details = element.details;
      meal.urls = element.urls;
      meal.discount = element.discount;
      meal.priceDetails = element.priceDetails;
      if (element.discount) {
        meal.percent = element.percent;
        meal.oldPrice = element.price;
        meal.newPrice = (+element.price - ((+element.price * +element.percent) / 100)).toString()
      } else {
        meal.price = element.price;
      }
      meal.amount = element.amount;
      meal.unitId = element.unitId;
      meal.categoryId = element.categoryId;
      meal.ingredients = element.ingredients;
      meal.cookTime = element.cookTime;
      meal.ingredientsDetails = element.ingredientsDetails
      return meal
    })
    return results;
  }

  async findByCategoryForDashboard(id: string) {
    const populateQuery = [{ path: 'kitchenId', select: ['name', 'logo'] }, { path: 'unitId' }, { path: 'ingredients' }]
    const meals = await this.MealModel.find({ categoryId: id }).populate(populateQuery) as any;

    const results = meals.map(element => {
      let meal: {
        kitchenId?,
        kitchenName?,
        kitchenLogo?,
        _id?,
        isAvailable?,
        name?,
        details?,
        price?,
        urls?,
        amount?,
        unitId?,
        ingredients?: string[],
        discount?,
        oldPrice?,
        newPrice?,
        percent?,
        cookTime?
      } = {
      }
      meal.kitchenId = element.kitchenId._id;
      meal.kitchenName = element.kitchenId.name;
      meal.kitchenLogo = element.kitchenId.logo;
      meal._id = element._id;
      meal.isAvailable = element.isAvailable;
      meal.name = element.name;
      meal.urls = element.urls;
      meal.details = element.details;
      if (element.discount) {
        meal.percent = element.percent;
        meal.oldPrice = element.price;
        meal.newPrice = (+element.price - ((+element.price * +element.percent) / 100)).toString()
      } else {
        meal.price = element.price;
      }
      meal.amount = element.amount;
      meal.unitId = element.unitId;
      meal.ingredients = element.ingredients;
      meal.cookTime = element.cookTime;
      return meal
    })
    return results;
  }

  async findByNameForDashboard(name: string) {
    const populateQuery = [{ path: 'kitchenId', select: ['name', 'logo'] }, { path: 'unitId' }, { path: 'categoryId' }, { path: 'ingredients' }]
    const meals = await this.MealModel.find({ name: { $regex: name } }).populate(populateQuery) as any;

    const results = meals.map(element => {
      let meal: {
        kitchenId?,
        kitchenName?,
        kitchenLogo?,
        _id?,
        isAvailable?,
        categoryId?,
        name?,
        details?,
        price?,
        urls?,
        amount?,
        unitId?,
        ingredients?: string[],
        discount?,
        oldPrice?,
        newPrice?,
        percent?,
        cookTime?
      } = {
      }
      meal.kitchenId = element.kitchenId._id;
      meal.kitchenName = element.kitchenId.name;
      meal.kitchenLogo = element.kitchenId.logo;
      meal._id = element._id;
      meal.isAvailable = element.isAvailable;
      meal.name = element.name;
      meal.urls = element.urlss;
      meal.details = element.details;
      if (element.discount) {
        meal.percent = element.percent;
        meal.oldPrice = element.price;
        meal.newPrice = (+element.price - ((+element.price * +element.percent) / 100)).toString()
      } else {
        meal.price = element.price;
      }
      meal.amount = element.amount;
      meal.unitId = element.unitId;
      meal.categoryId = element.categoryId;
      meal.ingredients = element.ingredients;
      meal.cookTime = element.cookTime;
      return meal
    })
    return results;
  }

  async findByKitchen(id: string) {
    const populateQuery = [{ path: 'unitId', select: 'name' }, { path: 'categoryId', select: 'name' }, { path: 'ingredients', select: 'name' }]
    const meals = await this.MealModel.find({ kitchenId: id, isAvailable: true }).populate(populateQuery);
    const results = meals.map(element => {
      let meal: {
        _id?,
        name?,
        details?,
        price?,
        priceDetails?,
        urls?,
        amount?,
        unit?,
        category?,
        ingredients?: string[],
        discount?,
        oldPrice?,
        newPrice?,
        percent?,
        cookTime?
      } = {}
      meal._id = element._id;
      meal.name = element.name;
      meal.details = element.details;
      meal.urls = element.urls;
      meal.priceDetails = element.priceDetails;
      meal.discount = element.discount;
      if (element.discount) {
        meal.percent = element.percent;
        meal.oldPrice = element.price;
        meal.newPrice = (+element.price - ((+element.price * +element.percent) / 100)).toString()
      } else {
        meal.price = element.price;
      }
      meal.amount = element.amount;
      meal.unit = element.unitId.name;
      meal.category = element.categoryId.name;
      let ingredients: string[] = [];
      for (let i = 0; i < element.ingredients.length; i++) {
        ingredients.push(element.ingredients[i].name)
      }
      meal.ingredients = ingredients;
      meal.cookTime = element.cookTime;
      return meal
    })
    return results;
  }

  async findByCategory(id: string) {
    const populateQuery = [{ path: 'kitchenId', select: ['name', 'logo'], populate: [{ path: 'regionId', select: 'name' }] }, { path: 'unitId', select: 'name' }, { path: 'ingredients', select: 'name' }]
    const meals = await this.MealModel.find({ categoryId: id, isAvailable: true }).populate(populateQuery) as any;

    const results = meals.map(element => {
      let meal: {
        kitchenId?,
        kitchenName?,
        kitchenLogo?,
        kitchenRegion?,
        _id?,
        name?,
        details?,
        price?,
        priceDetails?,
        urls?,
        amount?,
        unit?,
        ingredients?: string[],
        discount?,
        oldPrice?,
        newPrice?,
        percent?,
        cookTime?
      } = {
      }
      meal.kitchenId = element.kitchenId._id;
      meal.kitchenName = element.kitchenId.name;
      meal.kitchenLogo = element.kitchenId.logo;
      meal.kitchenRegion = element.kitchenId.regionId.name;
      meal._id = element._id;
      meal.name = element.name;
      meal.urls = element.urls;
      meal.details = element.details;
      meal.priceDetails = element.priceDetails;
      if (element.discount) {
        meal.percent = element.percent;
        meal.oldPrice = element.price;
        meal.newPrice = (+element.price - ((+element.price * +element.percent) / 100)).toString()
      } else {
        meal.price = element.price;
      }
      meal.amount = element.amount;
      meal.unit = element.unitId.name;
      let ingredients: string[] = [];
      for (let i = 0; i < element.ingredients.length; i++) {
        ingredients.push(element.ingredients[i].name)
      }
      meal.ingredients = ingredients;
      meal.cookTime = element.cookTime;
      return meal
    })
    return results;
  }

  async findByName(name: string) {
    const populateQuery = [{ path: 'kitchenId', select: ['name', 'logo'], populate: [{ path: 'regionId', select: 'name' }] }, { path: 'unitId', select: 'name' }, { path: 'ingredients', select: 'name' }]
    const meals = await this.MealModel.find({ name: { $regex: name }, isAvailable: true }).populate(populateQuery) as any;

    const results = meals.map(element => {
      let meal: {
        kitchenId?,
        kitchenName?,
        kitchenLogo?,
        kitchenRegion?,
        _id?,
        name?,
        details?,
        priceDetails?,
        price?,
        urls?,
        amount?,
        unit?,
        ingredients?: string[],
        discount?,
        oldPrice?,
        newPrice?,
        percent?,
        cookTime?
      } = {
      }
      meal.kitchenId = element.kitchenId._id;
      meal.kitchenName = element.kitchenId.name;
      meal.kitchenLogo = element.kitchenId.logo;
      meal.kitchenRegion = element.kitchenId.regionId.name;
      meal._id = element._id;
      meal.name = element.name;
      meal.urls = element.urls;
      meal.details = element.details;
      meal.priceDetails = element.priceDetails;
      if (element.discount) {
        meal.percent = element.percent;
        meal.oldPrice = element.price;
        meal.newPrice = (+element.price - ((+element.price * +element.percent) / 100)).toString()
      } else {
        meal.price = element.price;
      }
      meal.amount = element.amount;
      meal.unit = element.unitId.name;
      let ingredients: string[] = [];
      for (let i = 0; i < element.ingredients.length; i++) {
        ingredients.push(element.ingredients[i].name)
      }
      meal.ingredients = ingredients;
      meal.cookTime = element.cookTime;
      return meal
    })
    return results;
  }


  async findByFilter(filter) {
    const populateQuery = [{ path: 'kitchenId', select: ['name', 'logo'], populate: [{ path: 'regionId', select: 'name' }] }, { path: 'unitId', select: 'name' }, { path: 'ingredients', select: 'name' }]
    const meals = await this.MealModel.find(filter).populate(populateQuery) as any;

    const results = meals.map(element => {
      const meal: IMeal = {} as IMeal;
      meal.kitchenId = element.kitchenId._id;
      meal.kitchenName = element.kitchenId.name;
      meal.kitchenLogo = element.kitchenId.logo;
      meal.kitchenRegion = element.kitchenId.regionId.name;
      meal._id = element._id;
      meal.name = element.name;
      meal.urls = element.urls;
      meal.details = element.details;
      meal.priceDetails = element.priceDetails;
      if (element.discount) {
        meal.discount = true;
        meal.percent = element.percent;
        meal.oldPrice = element.price;
        meal.newPrice = (+element.price - ((+element.price * +element.percent) / 100)).toString()
      } else {
        meal.discount = false;
        meal.price = element.price;
      }
      meal.amount = element.amount;
      meal.unit = element.unitId.name;
      let ingredients: string[] = [];
      for (let i = 0; i < element.ingredients.length; i++) {
        ingredients.push(element.ingredients[i].name)
      }
      meal.ingredients = ingredients;
      meal.cookTime = element.cookTime;
      return meal
    })

    return results;
  }


  async updateDiscountStatus(id: string, status: boolean, percent?: string) {
    if (status) {
      this.MealModel.updateOne({ _id: id }, { percent: percent, discount: true }, { upsert: true })
        .then((docs) => console.log(docs))
    } else {
      this.MealModel.updateOne({ _id: id }, { discount: false }).then((docs) => console.log(docs))
    }
  }

  async findOne(id: string) {
    return await this.MealModel.findOne({ _id: id });
  }

  update(id: string, updateMealDto: UpdateMealDto) {
    this.MealModel.updateOne({ _id: id }, updateMealDto)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  remove(id: string) {
    this.MealModel.deleteOne({ _id: id }).then((res) => console.log(res)).catch((err) => console.log(err))
  }

  async findPrice(_id: string) {
    return await this.MealModel.findOne({ _id }, { price: 1, _id: 0 })
  }

  async findByDate(){
    const populateQuery = [{ path: 'kitchenId', select: ['name', 'logo'], populate: [{ path: 'regionId', select: 'name' }] }, { path: 'unitId', select: 'name' }, { path: 'ingredients', select: 'name' }]
    const meals = await this.MealModel.find({ isAvailable: true }).populate(populateQuery).sort({createdAt: -1}) as any;

    const results = meals.map(element => {
      const meal: IMeal = {} as IMeal;
      meal.kitchenId = element.kitchenId._id;
      meal.kitchenName = element.kitchenId.name;
      meal.kitchenLogo = element.kitchenId.logo;
      meal.kitchenRegion = element.kitchenId.regionId.name;
      meal._id = element._id;
      meal.name = element.name;
      meal.urls = element.urls;
      meal.details = element.details;
      meal.priceDetails = element.priceDetails;
      if (element.discount) {
        meal.discount = true;
        meal.percent = element.percent;
        meal.oldPrice = element.price;
        meal.newPrice = (+element.price - ((+element.price * +element.percent) / 100)).toString()
      } else {
        meal.discount = false;
        meal.price = element.price;
      }
      meal.amount = element.amount;
      meal.unit = element.unitId.name;
      let ingredients: string[] = [];
      for (let i = 0; i < element.ingredients.length; i++) {
        ingredients.push(element.ingredients[i].name)
      }
      meal.ingredients = ingredients;
      meal.cookTime = element.cookTime;
      return meal
    })

    return results; 
  }

}
