
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type LocationDocument = Location & Document;

@Schema({ versionKey: false })
export class Location {

    @Prop({ required: true })
    type: string;

    @Prop({ required: true })
    coordinates: [number, number];

    @Prop()
    _id: false;
}


export const LocationSchema = SchemaFactory.createForClass(Location);