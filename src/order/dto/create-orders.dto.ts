import IBasket from "src/interfaces/basket.interface";

export class CreateOrdersDto {
    kitchenId: string;
    price?: string;
    baskets?: IBasket[];
}
