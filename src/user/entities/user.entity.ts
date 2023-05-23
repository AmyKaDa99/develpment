/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from "mongoose";
import ILocation from 'src/interfaces/location.interface';
import { Region } from 'src/region/entities/region.entity';
import { LocationSchema } from 'src/sub-schemas/location.schema';

export type UserDocument = User & Document;
@Schema({ versionKey: false })
export class User {

    @Prop()
    name: string;

    @Prop({unique: true})
    phone: string;

    @Prop()
    password: string;

    @Prop({ type: SchemaTypes.ObjectId, ref: 'Region' })
    region: Region;

    @Prop([{ type: LocationSchema }])
    address: ILocation[];

    @Prop({ required: true, default: () => Date.now() })
    createdAt: Date;

    @Prop({unique: true})
    fcm: string;

    @Prop()
    refreshToken: string;

}

export const UserSchema = SchemaFactory.createForClass(User);

