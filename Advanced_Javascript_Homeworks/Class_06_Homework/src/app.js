class Product {
    constructor(name, category, discount, price) {
        this.name = name,
            this.category = category,
            this.discount = discount,
            this.price = price;
    }
}

const products = [
    new Product('Soap', 'Hygiene', true, 19),
    new Product('Toothpaste', 'Healthcare', true, 30),
    new Product('Ears Sticks', 'Hygiene', false, 80),
    new Product('Razor', 'Healthcare', true, 70),
    new Product('Shampoo', 'Beauty', true, 120),
    new Product('Hand Sanitizer', 'Hygiene', false, 25),
    new Product('Deodorant', 'Healthcare', false, 60),
    new Product('Facial Cleanser', 'Beauty', true, 55),
    new Product('Body Lotion', 'Hygiene', true, 40),
    new Product('Shower Gel', 'Beauty', false, 90),
    new Product('Conditioner', 'Hygiene', true, 85),
    new Product('Mouthwash', 'Healthcare', true, 45),
    new Product('All Round', 'Hygiene', false, 200),
    new Product('Cotton Swabs', 'Healthcare', true, 15),
    new Product('Shower Cap', 'Beauty', false, 10)
]


let productsWithPricesAboveTwenty = products.filter(product => product.price > 20)
    .map(product => product.name)

let discountedBeautyProducts = products.filter(product => product.category.toLowerCase() === 'beauty' && product.discount)
    .map(product => `${product.name}`)

let discountedProductsPrice = products.filter(product => product.discount)
    .map(product => product.price)
    .reduce((x, y) => x + y, 0)

let discountedProductsPrices = products.filter(product => product.discount)
    .map(product => `${product.name} ${product.price}`)

debugger
let vowels = ['a', 'e', 'i', 'o', 'u'];
let productsStartingWithVowelWithoutDiscount =
    products
        .filter(product => !product.discount && vowels.includes(product.name.toLowerCase()[0]))
        .map(product => `${product.name} ${product.price}MKD`)

let sortedProducts = [... products]


console.log(sortedProducts);
console.log(`Discounted Beauty Products : ${discountedBeautyProducts}`);
console.log(`Discounted Products: ${discountedProductsPrices}`);
console.log(`The price of all discounted products together : ${discountedProductsPrice}MKD`);
console.log(`Products with prices above 20MKD : ${productsWithPricesAboveTwenty}`);
console.log(`Products starting with vowel without discount : ${productsStartingWithVowelWithoutDiscount}`);
