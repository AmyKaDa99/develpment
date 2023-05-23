import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from "mongoose";

export type AppStatusDocument = AppStatus & Document;
@Schema({ versionKey: false })
export class AppStatus {
    @Prop({default: true})
    isOpen: boolean;

    @Prop({default: "بيتوتي"})
    name: string;
}

export const AppStatusSchema = SchemaFactory.createForClass(AppStatus);

