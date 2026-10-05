import { Product } from "./Product.js";
import type { DiscountableProduct } from "./DiscountableProduct.js";

export class PhysicalProduct extends Product implements DiscountableProduct {
    weight: number;

    constructor(
        sku: string,
        name: string,
        price: number,
        weight: number
    ) {
        super(sku, name, price);
        this.weight = weight;
    }

    override getPriceWithTax(): number {
        return this.price * 1.10;
    }

    get formattedWeight(): string {
        return `${this.weight} kg`;
    }

    applyDiscount(discount: number): number {
        return this.price - (this.price * discount / 100);
    }

    applyBulkDiscount(quantity: number): number {
        if (quantity >= 10) {
            return this.price * 0.90;
        }

        return this.price;
    }
}