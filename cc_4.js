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
    { id: 1, customerType: "senior", couponCode: "save10", taxRate: 0.085,
        cart: ({ sku: "001", quantity:2}, {sku: "002", quantity:1})},
    { id: 2, customerType: "student", couponCode: "save15", taxRate: 0.085,
        cart: ({ sku: "003", quantity:1}, {sku: "004", quantity:1}, {sku: "005", quantity:1})},
    { id: 3, customerType: "veteran", couponCode: "save20", taxRate: 0.085,
        cart: ({ sku: "005", quantity:2})}
];
