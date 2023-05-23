import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDiscountDto } from './dto/create-discount.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';
import { Discount, DiscountDocument } from './entities/discount.entity';
import { MealService } from 'src/meal/meal.service';
import { IMeal } from 'src/interfaces/meal.interface';
//import { Cron } from '@nestjs/schedule';
//import { CronExpression } from '@nestjs/schedule/dist';


@Injectable()
export class DiscountService {
  constructor(
    @InjectModel(Discount.name) private DiscountModel: Model<DiscountDocument>,
    private readonly mealService: MealService
  ) { }

  async create(createDiscountDto: CreateDiscountDto) {
    const createDiscount = new this.DiscountModel(createDiscountDto);
    await createDiscount.save();
  }

  async findAll() {
    const populateQuery = [
      { path: "kitchenId", select: ['name', 'logo'], populate: [{ path: 'regionId', select: 'name' }] },
      { path: "mealId", populate: [{ path: 'unitId', select: 'name' }, { path: 'categoryId', select: 'name' }, { path: 'ingredients', select: 'name' }] }]
    const discounts = await this.DiscountModel.find().populate(populateQuery) as any;
    const results = discounts.map(element => {

      const meal: IMeal = {} as IMeal;
      meal.kitchenId = element.kitchenId._id;
      meal.kitchenName = element.kitchenId.name;
      meal.kitchenLogo = element.kitchenId.logo;
      meal.kitchenRegion = element.kitchenId.regionId.name;
      meal.discountId = element._id;
      meal._id = element.mealId._id;
      meal.urls = element.mealId.urls;
      meal.name = element.mealId.name;
      meal.details = element.mealId.details;
      meal.priceDetails = element.mealId.priceDetails;
      meal.discount = element.mealId.discount;
      if (element.mealId.discount) {
        meal.percent = element.mealId.percent;
        meal.oldPrice = element.mealId.price;
        meal.newPrice = (+element.mealId.price -(+element.mealId.price * +element.mealId.percent) / 100).toString()
      } else {
        meal.price = element.mealId.price;
      }
      meal.amount = element.mealId.amount;
      meal.unit = element.mealId.unitId.name;
      meal.category = element.mealId.categoryId.name;
      let ingredients: string[] = [];
      for (let i = 0; i < element.mealId.ingredients.length; i++) {
        ingredients.push(element.mealId.ingredients[i].name)
      }
      meal.ingredients = ingredients;
      meal.cookTime = element.mealId.cookTime;
      return meal
    })
    return results;
  }

  async findOne(id: string) {
    const populateQuery = [{ path: "kitchen", select: ['name', 'logo'], populate: [{ path: 'region', select: 'name' }] }, { path: "meal", populate: [{ path: 'unit', select: 'name' }, { path: 'category', select: 'name' }, { path: 'ingredients', select: 'name' }] }]
    const discount = await this.DiscountModel.findOne({ _id: id }).populate(populateQuery) as any;
    if (discount) {
      let meal: { kitchenId?, kitchenName?, kitchenLogo?, kitchenRegion?, discountId?, _id?, name?, details?, price?, priceDetails?, urls?, amount?, unit?, category?, ingredients?: string[], discount?, oldPrice?, newPrice?, percent?} = {}
      meal.kitchenId = discount.kitchen._id;
      meal.kitchenName = discount.kitchen.name;
      meal.kitchenLogo = discount.kitchen.logo;
      meal.kitchenRegion = discount.kitchen.region.name;
      meal.discountId = discount._id;
      meal._id = discount.meal._id;
      meal.urls = discount.meal.urls;
      meal.name = discount.meal.name;
      meal.details = discount.meal.details;
      meal.priceDetails = discount.meal.priceDetails;
      meal.discount = discount.meal.discount;
      if (discount.meal.discount) {
        meal.percent = discount.meal.percent;
        meal.oldPrice = discount.meal.price;
        meal.newPrice = ((+discount.meal.price * +discount.meal.percent) / 100).toString()
      } else {
        meal.price = discount.meal.price;
      }
      meal.amount = discount.meal.amount;
      meal.unit = discount.meal.unit.name;
      meal.category = discount.meal.category.name;
      let ingredients: string[] = [];
      for (let i = 0; i < discount.meal.ingredients.length; i++) {
        ingredients.push(discount.meal.ingredients[i].name)
      }
      meal.ingredients = ingredients;
      return meal
    } else return null;

  }


  remove(id: string) {
    this.DiscountModel.deleteOne({ _id: id })
      .then((res) => {
        console.log(res)
        //  this.mealService.updateDiscountStatus(meal._id, false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  /*@Cron(CronExpression.EVERY_10_MINUTES)
  async handleCron() {
    const discountDocs =
      await this.DiscountModel
        .find({ isDeleted: false, endAt: { $lte: new Date() } })
    for (let i = 0; i < discountDocs.length; i++) {
      let id = discountDocs[i].mealId as any
      this.mealService.updateDiscountStatus(id, false)
    }
    await this.DiscountModel
      .updateMany({ isDeleted: false, endAt: { $lte: new Date() } }, { isDeleted: true })
      .then((res) => { console.log(res) })
      .catch((err) => { console.log(err) })
  }*/

}
