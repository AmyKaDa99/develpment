import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from "mongoose";
import { Category } from 'src/category/entities/category.entity';
import ILocation from 'src/interfaces/location.interface';
import { Region } from 'src/region/entities/region.entity';
import { LocationSchema } from 'src/sub-schemas/location.schema';

export type KitchenDocument = Kitchen & Document;
@Schema({ versionKey: false })
export class Kitchen {

    @Prop()
    name: string;

    @Prop()
    manager: string;

    @Prop()
    phone: [string];

    @Prop()
    managerPhoto: string;

    @Prop()
    logo: string;

    @Prop()
    about: string;

    @Prop()
    password: string;

    @Prop([{ type: SchemaTypes.ObjectId, ref: "Category" }])
    categories: Category[];

    @Prop({ type: SchemaTypes.ObjectId, ref: 'Region' })
    regionId: Region;

    @Prop({ type: LocationSchema })
    location: ILocation;

    @Prop({ required: true, default: 'جانب مفرق البريد' })
    address: string;

    @Prop({ required: true, default: () => Date.now() })
    createdAt: Date;

    @Prop({ required: true, default: true })
    isOpen: Boolean;

    @Prop({ required: true, default: ['الأحد'] })
    days: [string];

}

export const KitchenSchema = SchemaFactory.createForClass(Kitchen);
