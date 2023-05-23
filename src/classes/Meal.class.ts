export class MealResponse {
    _id?: string;
    name?: string;
    details?: string;
    amount?: string;
    unit?: string;
    ingredients?: string[];
    discount?: boolean;
    percent?: string;
    price?: string;
    oldPrice?: string;
    newPrice?: string;
    isAvailable?: boolean;
    kitchenId?: string;
    kitchenName?: string;
    kitchenLogo?: string;

    constructor(
        _id?: string,
        name?: string,
        details?: string,
        amount?: string,
        unit?: string,
        ingredients?: string[],
        discount?: boolean,
        percent?: string,
        price?: string,
        oldPrice?: string,
        newPrice?: string,
        isAvailable?: boolean,
        kitchenId?: string,
        kitchenName?: string,
        kitchenLogo?: string
    ) {
        this._id = _id;
        this.name = name;
        this.details = details;
        this.amount = amount;
        this.unit = unit;
        this.ingredients = ingredients;
        this.discount = discount;
        this.percent = percent;
        this.price = price;
        this.oldPrice = oldPrice;
        this.newPrice = newPrice;
        this.isAvailable = isAvailable;
        this.kitchenId = kitchenId;
        this.kitchenName = kitchenName;
        this.kitchenLogo = kitchenLogo;
    }
}