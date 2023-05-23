import { Document } from "mongoose";

export default interface IIngredientWithDetails extends Document {
    amount: string;
    id: string;
    name: string;
    unitId: string;
    unit: string;
}
