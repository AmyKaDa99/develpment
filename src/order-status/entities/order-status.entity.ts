import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from "mongoose";

export type OrderStatusDocument = OrderStatus & Document;
@Schema({ versionKey: false })
export class OrderStatus {
    @Prop()
    name: string;
}

export const OrderStatusSchema = SchemaFactory.createForClass(OrderStatus);

