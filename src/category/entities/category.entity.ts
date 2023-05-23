import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from "mongoose";

export type CategoryDocument = Category & Document;
@Schema({ versionKey: false })
export class Category {
    @Prop()
    name: string;

    @Prop()
    url: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);

