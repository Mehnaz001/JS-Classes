// //Immediately Invoked Function

// (function () {
//     console.log("Hello")
// })();

// //Scope

// //Global scope
// let x = 10

// //Block Scope - {}
// if(true) {
//     let y = 10
// }
// // console.log(y)

// //Function Scope
// function login() {
//     let username = "Mehnaz"
//     console.log(username)
// }
// login()
// // console.log(username)

// function calculatePrice() {
//     let price = 500
//     let tax = 50

//     console.log(price+tax)
// }
// // console.log(price)
// calculatePrice()

// let a = 10 //global scope
// // function outer() {
// //     let b = 20 //function scope
// //     function inner() {
// //         let c = 30
// //         console.log(a)
// //         console.log(b)
// //         console.log(c)
// //     }

// //     inner()
// // }
// // outer()

// //Lexical scope
// let name = "Mehnaz"
// function outer() {
//     let name = "Abcd"
//     function inner() {
//         console.log(name)
//     }
//     inner()
// }
// outer()

// let x1 = 10
// function outer() {
//     let x1 = 20
//     function inner() {
//         console.log(x1)
//     }
//     return inner
// }

// let result = outer()
// result()

// //Var vs let
// var b1 = 10
// console.log(b1)
// var b1 = 20
// console.log(b1)
// if(true) {
//     var b1 = 30
//     var b2 = 90
//     console.log(b1)
//     console.log(b2)
// }
// console.log(b2)

//Function expression
// const greet = function() {
//     console.log("hello")
// }
// greet()
// const add = function (a,b) {
//     console.log(a+b)
// }
// add(10,20)

//Hoisting
// greet()
// function greet() {
//     console.log("Hello")
// }


// const greet = function() {
//      console.log("hello")
// }
// greet()

//High Order function

function multipleGreet(func, n) {
    for (let i = 1; i <= n; i++) {
        func()
    }
}
function greet() {
    console.log("hello")
}
multipleGreet(greet, 5)


function oddEvenTest(request) {
    if (request == 'even') {
        return function (n) {
            if (n % 2 == 0) {
                console.log("Yes, its a even number")
            } else {
                console.log("Not even number")
            }
        }
    } else if(request == 'odd') {
        return function (n) {
            if (n % 2 != 0) {
                console.log("Yes, its a odd number")
            } else {
                console.log("Not odd number")
            }
        }
    } else {
        console.log("wrong request")
    }
}

let func = oddEvenTest('hh')