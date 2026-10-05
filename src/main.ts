
import { sortByPrice, sortByName } from "./utils/productSorter.js";

import { PhysicalProduct } from "./models/PhysicalProduct.js";
import { DigitalProduct } from "./models/DigitalProduct.js";
import { calculateTax } from "./utils/taxCalculator.js";

const products = [
    new PhysicalProduct("P001", "Laptop", 1000, 2.5),
    new DigitalProduct("D001", "TypeScript Course", 50, 500)
];

for (const product of products) {
    console.log(product.displayDetails());
    console.log(`Final Price: $${calculateTax(product)}`);

    if (product instanceof PhysicalProduct) {
        console.log(`Weight: ${product.formattedWeight}`);
    }

    if (product instanceof DigitalProduct) {
        console.log(`File Size: ${product.formattedFileSize}`);
    }

    console.log("--------------------");
}
console.log("Sorted by Price:");

for (const product of sortByPrice(products)) {
    console.log(product.displayDetails());
}

console.log("--------------------");

console.log("Sorted by Name:");

for (const product of sortByName(products)) {
    console.log(product.displayDetails());
}
const laptop = new PhysicalProduct("P001", "Laptop", 1000, 2.5);

console.log("--------------------");
console.log(`Bulk Price for 10 laptops: $${laptop.applyBulkDiscount(10)}`);