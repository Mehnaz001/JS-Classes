// //Array methods

// //forEach()

// let fruits = ['apple','banana','mango']
// fruits.forEach(function(fruit,index){
//     console.log(fruit,index)
// })

// let numbers = [10,20,30,40]
// numbers.forEach((num)=>{
//     console.log(num*num)
// })

// let users = [
//     {name:"Ali",age:20},
//     {name:"Sara",age:22},
//     {name:"John",age:25}
// ]
// users.forEach((user)=>{
//     console.log(user.name,user.age)
// })

// let products = [
//     {name:"Laptop",price:50000},
//     {name:"Phone",price:30000},
//     {name:"tab",price:40000}
// ]
// //laptop-50000
// products.forEach((product)=>{
//     console.log(`${product.name} - ${product.price}`)
// })

//map() - tranform every element -return a new array
let numbers = [1,2,3,4]
let result = numbers.map((num)=>{
    return num*2
})
console.log(result)

let prices = [100,200,300]
let fruits = ['apple','banana','mango']
let result2 = fruits.map((fruit,index)=>{
    return `${index} - ${fruit}`
})
console.log(result2)

let users = [
    {name:"Ali",age:20},
    {name:"Sara",age:22},
    {name:"John",age:25}
]
let names = users.map((user)=>{
    return user.name
})
console.log(names)