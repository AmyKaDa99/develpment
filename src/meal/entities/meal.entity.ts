import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from "mongoose";
import { Category } from 'src/category/entities/category.entity';
import { Ingredient } from 'src/ingredient/entities/ingredient.entity';
import IIngredientWithDetails from 'src/interfaces/ingredientWithDetails.interface';
import ILocation from 'src/interfaces/location.interface';
import { Kitchen } from 'src/kitchen/entities/kitchen.entity';
import { ingredientWithDetailsSchema } from 'src/sub-schemas/ingredientWithDetails.schema';
import { LocationSchema } from 'src/sub-schemas/location.schema';
import { Unit } from 'src/unit/entities/unit.entity';

export type MealDocument = Meal & Document;
@Schema({ versionKey: false })
export class Meal {

    @Prop({ required: true, default: 'name' })
    name: string;

    @Prop()
    details: string;

    @Prop({ required: true, default: 'price' })
    price: string;

    @Prop()
    amount: string;

    @Prop({ type: SchemaTypes.ObjectId, ref: "Unit" })
    unitId: Unit;

    @Prop({ type: SchemaTypes.ObjectId, ref: "Kitchen", required: true })
    kitchenId: Kitchen;

    @Prop({ type: SchemaTypes.ObjectId, ref: "Category" })
    categoryId: Category;

    @Prop()
    priceDetails: string;

    @Prop([{ type: SchemaTypes.ObjectId, ref: "Ingredient" }])
    ingredients: Ingredient[];

    @Prop([{ type: ingredientWithDetailsSchema }])
    ingredientsDetails: IIngredientWithDetails[];

    @Prop({ required: true, default: () => Date.now() })
    createdAt: Date;

    @Prop({ required: true, default: false })
    discount: boolean;

    @Prop({ required: true, default: true })
    isAvailable: boolean;

   // @Prop({ required: true, default: "http://res.cloudinary.com/refq/image/upload/v1672052714/xmmadbhrdwxtdqhxxbcc.jpg" })
  //  url: string;

    
    @Prop({ required: true, default: ["http://res.cloudinary.com/refq/image/upload/v1672052714/xmmadbhrdwxtdqhxxbcc.jpg"] })
    urls: string[];

    @Prop()
    percent: string;

    @Prop({ required: true, default: "6 hours" })
    cookTime: string;

}

export const MealSchema = SchemaFactory.createForClass(Meal);
