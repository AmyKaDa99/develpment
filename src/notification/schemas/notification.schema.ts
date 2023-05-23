import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Types, SchemaTypes } from 'mongoose';
import { User } from 'src/user/entities/user.entity';


export type NotificationDocument = Notification & Document;

@Schema({ versionKey: false })
export class Notification {

    @Prop({ required: true })
    description: string;

    @Prop({ })
    type: string;

    @Prop({ type: SchemaTypes.ObjectId, ref: 'User' })
    userId: User;

    @Prop({ type: SchemaTypes.ObjectId, ref: 'Order' })
    orderId: User;


    @Prop({ required: true, default: true })
    isDashboard: boolean;

    @Prop({})
    uniqueId: string;

    @Prop({ required: true, default: () => Date.now() })
    createdAt: Date;


}

export const NotificationSchema = SchemaFactory.createForClass(Notification);
