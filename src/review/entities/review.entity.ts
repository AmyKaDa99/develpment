import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from "mongoose";

export type ReviewDocument = Review & Document;
@Schema({ versionKey: false })
export class Review {

    @Prop({ required: true, default: false })
    isDelivered: boolean;

    @Prop({ required: true, default: "I am feedback" })
    feedback: string;

    @Prop({ required: true, default: "-1" })
    speedStar: string;

    @Prop({ required: true, default: "-1" })
    cleanStar: string;

    @Prop({ required: true, default: "-1" })
    yummyStar: string;

    @Prop({ required: true, default: () => Date.now() })
    deliveredAt: Date;

    @Prop({})
    createdAt: Date;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
