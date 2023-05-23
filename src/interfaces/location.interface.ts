import { Document } from "mongoose";

export default interface ILocation extends Document {
    type: string;
    coordinates: [number, number];
}
