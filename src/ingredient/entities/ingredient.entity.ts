import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from "mongoose";

export type IngredientDocument = Ingredient & Document;
@Schema({ versionKey: false })
export class Ingredient {
    @Prop()
    name: string;

}

export const IngredientSchema = SchemaFactory.createForClass(Ingredient);

