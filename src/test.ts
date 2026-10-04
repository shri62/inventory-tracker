import { PhysicalProduct } from "./models/PhysicalProduct.js";

const product = new PhysicalProduct(
    "P1001",
    "Laptop",
    1000,
    2.5
);

console.log("Product Details:");
console.log(product.displayDetails());

console.log("Price with 10% tax:");
console.log(product.getPriceWithTax());

console.log("Formatted Weight:");
console.log(product.formattedWeight);