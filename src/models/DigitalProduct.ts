import { Product } from "./Product.js";

export class DigitalProduct extends Product {
    fileSize: number;

    constructor(
        sku: string,
        name: string,
        price: number,
        fileSize: number
    ) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }

    override getPriceWithTax(): number {
        return this.price;
    }

    get formattedFileSize(): string {
        return `${this.fileSize} MB`;
    }
}