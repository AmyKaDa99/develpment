import { Document } from "mongoose";

export default interface IBasket extends Document {
    mealId: string;
    numberOfItems: string;
    totalPrice: string;
    details: string;
}
