// NaN in js - not a number

console.log(0/0)
console.log(typeof(NaN))
console.log(isNaN('a'))

//Operator Precendence

//() -> ** -> *,/,% -> +, -

console.log((5+2)/7+1*2)

// (10+5)*2
// 20/5 + 3
// 2**3 +4
// 5+2**3*2
// 2**3**2

//Assignment Operator 
let a = 10
a = a+1  
// Shorthand operator 
a += 1

//Unary operator

let i = 5
console.log(i++)// post increment - first use then increase
console.log(++i )//pre increment - first increase then use
//i-- // decrement

a = 10 
let b = a++

console.log(a) //11
console.log(b) //10

let x = 5;
console.log(++x) //6
console.log(x) //6

x = 10;
let y = ++x

console.log(x) //11
console.log(y) //11

x = 5
console.log(x++) //5
console.log(++x) //7
console.log(x) //7

//Identifers 

//valid - A-z,a-z, letters , _, $ 

//Js naming convention - camelCase myFirstName


//Boolean in js - true or false , yes or no, 1 or 0

let isAdult = true;
console.log(isAdult)


//String in Js
let name = "Mehnaz"
let role = "ironLady"
let age = "12"
let char = 'a'

console.log(name.length)
console.log(name[0], name[4])

//null & undefined
let value; // default undefined 
let cart = NULL // intentionally by us