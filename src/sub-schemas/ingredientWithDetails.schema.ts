
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';
import { Ingredient } from 'src/ingredient/entities/ingredient.entity';
import { Unit } from 'src/unit/entities/unit.entity';

export type ingredientWithDetailsDocument = ingredientWithDetails & Document;

@Schema({ versionKey: false })
export class ingredientWithDetails {

    @Prop()
    amount: string;

    @Prop({ type: SchemaTypes.ObjectId, ref: "Unit" })
    unitId: Unit;

    @Prop()
    unit: string;

    @Prop({ type: SchemaTypes.ObjectId, ref: "Ingredient" })
    ingredientId: Ingredient;

    @Prop()
    ingredient: string;

    @Prop()
    _id: false;
}


export const ingredientWithDetailsSchema = SchemaFactory.createForClass(ingredientWithDetails);