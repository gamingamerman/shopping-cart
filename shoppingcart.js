let cart = [
    {
        name : "banana",
        qty : 3,
        price : 4.99
    },
    {
        name : "chicken",
        qty : 2,
        price : 3.99
    },
    {
        name : "apple",
        qty : 5,
        price : 2.99
    },
    {
        name : "milk",
        qty : 1,
        price : 1.70
    },
    {
        name : "pork",
        qty : 7,
        price : 3.79
    },
    {
        name : "orange",
        qty : 2,
        price : 3.00
    },
    {
        name : "toothpaste",
        qty : 1,
        price : 1.50
    },
]


function sum_res ( obj ) {
    sum = 0;
    sum_1 = []

    for (let items in obj) {
        result = obj[items].price * obj[items].qty
        sum += result
    }
    return sum

}

function mult_res( obj ) {
    sum_1 = []

    for (let items in obj) {
        result = obj[items].price * obj[items].qty
        sum_1.push(result)
    }
    return sum_1
}

// function give_name( obj ) {
//     stuff = 
// }

result1 = sum_res(cart)
result2 = mult_res(cart)

function drawer( res1, res2, cart ) {
    for (let item in cart) {
        console.log("Item " + item + ": " + cart[item].name + " " + cart[item].price + "€ " + cart[item].qty)
    
    }
    console.log("---------------------")
    console.log("Total: " + cart.length + " " + "Items: ")
}

console.log(drawer(result1, result2, cart))
// banana : 3.99,
// apple : 2.99,
// milk : 2.50,
// orange_juice : 2.00,
// pork : 5.20,
// bacon : 4.99,
// toothpaste : 2.99