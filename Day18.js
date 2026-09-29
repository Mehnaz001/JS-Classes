//Filter 
// let numbers = [10,15,20,25,30]
// let result = numbers.filter(function(num){
//     return num>20
// })
// console.log(result)

// //Practice - create only even numbers array from an array

// let names = ["Alice","John","Mehnaz","Sara","Alex"]
// let result1 = names.filter((name)=>{
//     return name.length>4
// })
// console.log(result1)

// let products = [
//     {name:"Laptop",price:60000},
//     {name:"Keyboard",price:1000},
//     {name:"Mouse",price:500},
//     {name:"Phone",price:15000}
// ]
// let expensiveProducts = products.filter((product)=>{
//     return product.price>10000
// })
// console.log(expensiveProducts)

//every() - returns only true or false
// let numbers = [2,4,6,8,5]
// let result = numbers.every((num)=>{
//     return num%2==0
// })
// console.log(result)

// //some() - some element true - return false
// let numbers1 = [2,4,6,8,5]
// let result1 = numbers.some((num)=>{
//     return num%2!=0
// })
// console.log(result1)

//Reduce() - mutliple values - one final value
// let numbers = [10,20,30,40]
// let total = numbers.reduce((sum,num)=>{
//     return sum+num
// },0)
// console.log(total)

// let numbers1 = [10,45,23,89,12]
// let max = numbers1.reduce((largest,num)=>{
//     return num>largest? num:largest
// },numbers[0])
// console.log(max)
//Ternary operator
// condition? true:false

let products = [
    {
        id:1,
        name:"Laptop",
        price:60000,
        category:"Electronics",
        inStock:true,
        rating:4.5
    },
    {
        id:2,
        name:"Wireless Mouse",
        price:1200,
        category:"Electronics",
        inStock:true,
        rating:4.2
    },
    {
        id:3,
        name:"Keyboard",
        price:2500,
        category:"Electronics",
        inStock:false,
        rating:3.8
    },
    {
        id:4,
        name:"Backpack",
        price:1800,
        category:"Accessories",
        inStock:true,
        rating:4.6
    },
    {
        id:5,
        name:"Headphones",
        price:3500,
        category:"Electronics",
        inStock:true,
        rating:4.7
    }
]

//Q-1 Product name print and price
products.forEach(product=>{
    console.log(product.name + '-'+ product.price)
})

//Q-2 Create an array containing product names and price
let names = products.map(product=>{
    return product.name + '-'+ product.price
})
console.log(names)

//Q-3 find all products currently in stock
let availableProducts = products.filter(product=>{
    return product.inStock === true
})
console.log(availableProducts)

//Q-4 find all electronics product only
let electronics = products.filter(product=>{
    return product.category === "Electronics"
})
console.log(electronics)

//Q-5 find products cost more than 2000
//Q-6 check every products are in stock?
//Q-7 check evry product has rating of atleast 3
//Q-8 Total price of all products
//Q-9 Find most expensive product
//Q-10 total price of only products that are in stock

let total = products.filter(product=>product.inStock).reduce((sum,product)=> {
    return sum+product.price
},0)

console.log(total)