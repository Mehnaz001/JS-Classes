//Functions - reusable block of code 

//Function definition
// function greet() {
//     console.log("Hello")
// }

// //Function Calling
// greet()
// greet()

//Function with Parameters

//Parameters - variable specified during function definition
function greet(name) {
    console.log("hello",name)
}

//argument - actual value we pass in parenthesis
greet("mehnaz") 

function add(a,b) {
    console.log(a+b)
}

add(10,20)

//Practice q - create a function that take price and quantity and prints total price

//default parameters
function greet(name="Guest") {
    console.log("hello",name)
}

greet("mehnaz")
greet()

//Practice - function showCountry with default India

// function add(a,b=10) {
//     console.log(a+b)
// }
// add(12,18)
// add()

//Return keyword
function add(a,b) {
    return a+b
}

let sum = add(10,20)
console.log(add(12,10))
console.log(sum)

//Practice q - create a function square which takes a number and returns it square
function square(number) {
    return number*number
}

let sq = square(4)
console.log(sq)

function checkAge(age) {
    if(age>=18) {
        return "Eligible"
    } 

    return "not eligible"
}

console.log(checkAge(18))

function isAdult(age) {
    return age>=21
}

if(isAdult(17)) {
    console.log("Yes you're adult")
} else {
    console.log("You're minor")
}

