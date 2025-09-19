let products = [
    { sku: "001", name: "phone charger", category: "electronics", price: 4.99, inventory: 100},
    { sku: "002", name: "t-shirt", category: "apparel", price: 12.99, inventory: 150},
    { sku: "003", name: "apple", category: "groceries", price: 0.99, inventory: 75},
    { sku: "004", name: "lamp", category: "household", price: 119.99, inventory: 150},
    { sku: "005", name: "bottled water", category: "default", price: 199.99, inventory: 50}
];

for (let product of products) {
    let discount = 0;
    switch(product.category) {
        case "electronics":
            discount = 0.2
            break;

    case "groceries":
    case "household":
        discount = 0.1;
        break;
    case "apparel":
        discount = 0.15;
        break;

        case "default":
        discount = 0.0
        break;
};
let promoPrice = product.price * (1 - discount);
product.promoPrice = promoPrice;
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
            
            product.inventory -= item.quantity;
        } else {
            console.log(`Not enough inventory for ${item.sku}`);
        }
    }
 console.log(`Customer ${customer.id} (${customer.customerType}) total: $${total.toFixed(2)}`);
}

console.log("Logging first product with for...in:");
for (let key in products[0]) {
    console.log(`${key}: ${products[0][key]}`);
}

console.log("Logging all products with Object.entries:");
for (let product of products) {
    for (let [key, value] of Object.entries(product)) {
        console.log(`${key}: ${value}`);
    }
    console.log("------");
}