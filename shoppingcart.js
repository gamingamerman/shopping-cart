let cart = [
    {
        name : "banana",
        qty : 3,
        price : 3.99
    },
    {
        name : "chicken",
        qty : 2,
        price : 3.99
    },
    {
        name : "apple",
        qty : 5,
        price : 3.99
    },
    {
        name : "milk",
        qty : 1,
        price : 3.99
    },
    {
        name : "pork",
        qty : 7,
        price : 3.99
    },
    {
        name : "orange",
        qty : 2,
        price : 3.99
    },
    {
        name : "toothpaste",
        qty : 1,
        price : 3.99
    },
]

function mulitply ( obj ) {
    total = obj[0].price * obj[0].qty
    return total

}

function total( obj ) {
    sum = 0;

    for( let prices in obj) {
        sum += parseFloat( obj[0].price );
    }

    return sum;
}

// console.log(total(cart))
console.log(mulitply(cart))

// banana : 3.99,
// apple : 2.99,
// milk : 2.50,
// orange_juice : 2.00,
// pork : 5.20,
// bacon : 4.99,
// toothpaste : 2.99