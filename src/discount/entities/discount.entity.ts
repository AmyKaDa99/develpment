import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from "mongoose";
import { Kitchen } from 'src/kitchen/entities/kitchen.entity';
import { Meal } from 'src/meal/entities/meal.entity';

export type DiscountDocument = Discount & Document;
@Schema({ versionKey: false })
export class Discount {
    @Prop({ type: SchemaTypes.ObjectId, ref: "Meal" })
    mealId: Meal;

    @Prop({ type: SchemaTypes.ObjectId, ref: "Kitchen" })
    kitchenId: Kitchen;

    @Prop()
    percent: string;

    @Prop({ required: true, default: () => Date.now() })
    createdAt: Date;

    @Prop({ required: true, default: () => Date.now() })
    startAt: Date;

    @Prop({ required: true, default: () => Date.now() })
    endAt: Date;

    @Prop({ required: true, default: false })
    isDeleted: Boolean;

}

export const DiscountSchema = SchemaFactory.createForClass(Discount);
