import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from "mongoose";

export type UnitDocument = Unit & Document;
@Schema({ versionKey: false })
export class Unit {
    @Prop()
    name: string;
}

export const UnitSchema = SchemaFactory.createForClass(Unit);

