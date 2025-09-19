let products = [
    { sku: "001", name: "football", category: "sports equipment", price: 39.99, inventory: 250},
    { sku: "002", name: "Gatorade", category: "beverages", price: 29.99, inventory: 150},
    { sku: "003", name: "nike hoodie", category: "apparel", price: 89.99, inventory: 75},
    { sku: "004", name: "running shoes", category: "footwear", price: 119.99, inventory: 200},
    { sku: "005", name: "Jordans", category: "footwear", price: 199.99, inventory: 50}
];

for (let product of products) {
    let discount = 0;
    switch(product.category) {
        case "sports equipment":
            discount = 0.15
            break;

    case "footwear":
    case "apparel":
        discount = 0.1;
        break;
    case "beverages":
        discount = 0;
        break;
};
let promoPrice = product.price * (1 - discount);
product.promoPrice = promoPrice.toFixed(2);
};
console.log("Products with promo prices:", products);

const customers = [
     { id: 1, customerType: "senior", cart: [{ sku: "001", quantity: 2 }, { sku: "002", quantity: 1 }] },
    { id: 2, customerType: "student", cart: [{ sku: "003", quantity: 1 }, { sku: "004", quantity: 1 }, { sku: "005", quantity: 1 }] },
    { id: 3, customerType: "regular", cart: [{ sku: "005", quantity: 2 }] }
];

for (let customer of customers) {
    let total = 0;
    let extraDiscount = 0;

if (customer.customerType === "student") {
        extraDiscount = 0.05;
    } else if (customer.customerType === "senior") {
        extraDiscount = 0.07;
    } else {
        extraDiscount = 0;
    }
    for (let item of customer.cart) {
        let product = products.find(p => p.sku === item.sku);

        if (product && product.inventory >= item.quantity) {
            let finalPrice = product.promoPrice * (1 - extraDiscount);
            total += finalPrice * item.quantity;

            // Reduce inventory
            product.inventory -= item.quantity;
        } else {
            console.log(`Not enough inventory for ${item.sku}`);
        }
    }
    