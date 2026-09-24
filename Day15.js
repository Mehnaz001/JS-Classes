// //Methods
// const calculator = {
//     add: function(a,b) {
//         return a+b
//     }
// }

// console.log(calculator.add(10,20))

// //this keyword
// const student = {
//     name:"Mehnaz",
//     age:20,

//     getName() {
//         console.log(this)
//         console.log(this.name)
//     }
// }

// student.getName()

// function name() {
//     console.log(this)
// }

// name()

// function func() {
//     //do something
// }

// const add = function() {
//     //do something
// }

const greet = () => {
    console.log("Hello")
}

greet()

const sum = (a,b) => {
    console.log(a+b)
}

sum(10,20)

const add = (num1,num2) => {
    return num1+num2
}

const total = add(10,20)
console.log(total)

const multiply = (a,b) => (a*b)
console.log(multiply(2,5))
