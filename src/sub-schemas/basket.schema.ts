
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';
import { Meal } from 'src/meal/entities/meal.entity';

export type BasketDocument = Basket & Document;

@Schema({ versionKey: false })
export class Basket {

    @Prop({ type: SchemaTypes.ObjectId, ref: "Meal" })
    mealId: Meal;

    @Prop()
    numberOfItems: string;

    @Prop()
    totalPrice: string;

    @Prop()
    details: string;

    @Prop()
    _id: false;
}


export const BasketSchema = SchemaFactory.createForClass(Basket);