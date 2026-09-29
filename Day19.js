// function greet() {
//     console.log("Hello")
// }
// greet()

// function greet(name) {
//     console.log("Hello"+name)
// }
// greet()

//Default parameters
// function greet(name = "Guest") {
//     console.log("Hello"+name)
// }
// greet()

// function add(a=1,b=1) {
//     console.log(a+b)
// }
// add(19,45)
// add()

//Spread Operator
// const fruits = ["apple","banana","mango"]
// const fruits2 = fruits
// console.log(fruits)
// console.log(fruits2)
// fruits2[0] = "orange"
// console.log(fruits)
// console.log(fruits2)

// const newFruits = [...fruits]
// console.log(newFruits)
// newFruits[0] = 'orange'
// console.log(fruits)
// console.log(newFruits)

//Combine arrays
// const boys = ["Ali","john"]
// const girls = ["Sara","Ayesha"]
// const students = [...boys,...girls]
// console.log(students)

//Add new values
// const nums = [2,3,4]
// const newNums = [1,...nums,5]
// console.log(newNums)

// let nums = [29,56,45,65]
// console.log(Math.min(...nums))

// let chars = [..."Mehnaz"]
// console.log(chars)

//Spread with object
// const user = {
//     name:"Mehnaz",
//     age:20
// }

// const updatedUser = {
//     ...user,
//     city:"Ludhiana"
// }
// console.log(updatedUser)

//Rest
// function add(...nums) {
//     // console.log(nums)
//     // let sum = 0;

//     // for(let n of nums) {
//     //     sum+=n
//     // }

//     // console.log(sum)

//     return nums.reduce((sum,el)=>sum+el,0)
// }

// let total = add(10,29,30,70)
// console.log(total)

//Destructing
const fruits = ['apple','banana','mango']
const [first, ,third] = fruits
console.log(first)
console.log(third)

const user = {
    name:"Mehnaz",
    age:20
}
const {name,age} = user
console.log(name)
console.log(age)

//Practice questions

//Q1 - Extract name and email using object destructuring
// const user = {
//     name:"Aman",
//     age:22,
//     email:"aman@gmail.com",
//     city:Delhi
// }

//Q2 - extract title,price amd brand into separate variables
// const product = {
//     title:"Laptop",
//     price:5500,
//     brand:"HP",
//     inStock:true
// };

//Q3 - const order = ['Laptop',5500,"Delivered"] - extract product name, price and status

//Q4 - const cart = ['Laptop','Mouse','Keyboard'] - create new array with this items and also add headphones

//Q5 - calculate total function (rest)