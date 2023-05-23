export interface IMeal {
    kitchenId: string,
    kitchenName: string,
    kitchenLogo: string,
    kitchenRegion: string,
    discountId?: string;
    category?: string;
    _id: string,
    name: string,
    details: string,
    priceDetails: string,
    price?: string,
    //url: string,
    urls: string[],
    amount: string,
    unit: string,
    ingredients: string[],
    discount: boolean,
    oldPrice?: string,
    newPrice?: string,
    percent?: string,
    cookTime: string
}