// solution 1

let phonePrice = 119.95;
let tax = 5;
let phoneQuantity = 30;

let phonePriceWithTax = phonePrice + (phonePrice * tax / 100);
let phonesOfferPrice = phonePriceWithTax * phoneQuantity;

console.log(Math.round(phonePriceWithTax), "$USD per Phone");
console.log(Math.round(phonesOfferPrice), "$USD in Total");


// solution 2

/* function phonePriceCalculator(phonePriceWithTax, phoneQuantity) {
    let result = phonePriceWithTax * phoneQuantity;
    return result;
}

let phonePrice = 119.95;
let tax = 5;
let phoneOfferTotalPrice = phonePriceCalculator((phonePrice + (phonePrice * tax / 100)), 30);
console.log("Thirty phones cost is", phoneOfferTotalPrice, "$USD in Total"); */