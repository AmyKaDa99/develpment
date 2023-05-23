import IBasket from "src/interfaces/basket.interface";
import ILocation from "src/interfaces/location.interface";

export class CreateOrderDto {
    userId: string;
    kitchenId: string;
    orderStatusId?: string;
    uniqueId?: string;
    deliveredDate: Date;
    location: ILocation;
    details: string;
    locationDetails: string;
    regionId: string;
    price: string;
    baskets: IBasket[];
}
