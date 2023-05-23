import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from "mongoose";
import IBasket from 'src/interfaces/basket.interface';
import ILocation from 'src/interfaces/location.interface';
import { Kitchen } from 'src/kitchen/entities/kitchen.entity';
import { OrderStatus } from 'src/order-status/entities/order-status.entity';
import { Region } from 'src/region/entities/region.entity';
import { Review } from 'src/review/entities/review.entity';
import { BasketSchema } from 'src/sub-schemas/basket.schema';
import { LocationSchema } from 'src/sub-schemas/location.schema';
import { User } from 'src/user/entities/user.entity';

export type OrderDocument = Order & Document;
@Schema({ versionKey: false })
export class Order {

    @Prop({ required: true, default: "I am unique value" })
    uniqueId: string;

    @Prop({ type: SchemaTypes.ObjectId, ref: "User" })
    userId: User;

    @Prop({ type: SchemaTypes.ObjectId, ref: "Kitchen" })
    kitchenId: Kitchen;

    @Prop({ type: SchemaTypes.ObjectId, ref: "OrderStatus" })
    orderStatusId: OrderStatus;

    @Prop({ type: SchemaTypes.ObjectId, ref: "Review" })
    reviewId: Review;

    @Prop({ required: true, default: () => Date.now() })
    createdAt: Date;

    @Prop({ required: true, default: () => Date.now() })
    deliveredDate: Date;

    @Prop({ type: LocationSchema })
    location: ILocation;

    @Prop({ type: SchemaTypes.ObjectId, ref: 'Region', required: true, default: "63a753f4bee22ac8ccbf14c4" })
    regionId: Region;

    @Prop({ required: true, default: "non" })
    locationDetails: string;

    @Prop()
    price: string;

    @Prop({  default: "non" })
    details: string;

    @Prop([{ type: BasketSchema }])
    baskets: IBasket[];

}

export const OrderSchema = SchemaFactory.createForClass(Order);
