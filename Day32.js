// function greet() {
//     console.log("hello")
// }

// function demo () {
//     greet()
//     console.log("welcome")
// }

// demo()

// function confirmOrder () {
//     console.log("order confirmed")
// }

// function makePayment() {
//     console.log("Payment Succefull")
//     confirmOrder()
// }

// function placeOrder() {
//     console.log("Placing an order...")
//     makePayment()
//     console.log("order completed")
// }

// placeOrder()

// console.log("Start")
// let start = Date.now()

// while(Date.now()-start<3000) {
//     console.log("Something happening")
// }

// console.log("End")

// console.log("start")
// setTimeout(()=>{
//     console.log("Timer finished")
// },1000)
// for(let i=0; i<500; i++) {
//     console.log(i)
// }
// console.log("end")

//Callback function
// function greet() {
//     console.log("Hello")
// }
// function sayHello(callback) {
//     callback()
// }
// sayHello(greet)

// function first() {
//     console.log("First")
// }
// function second(callback) {
//     console.log("Second")
//     callback()
// }

// second(first)

//Callback Hell -- nesting of callbacks
function placeOrder(makePayment) {
    console.log("order placed")
    makePayment()
}

function makePayment(prepareFood) {
    console.log("Payment Successful")
    prepareFood()
}

function prepareFood(deliverFood) {
    console.log("Food prepared")
    deliverFood()
}

function deliverFood() {
    console.log("Food deleivered")
}

placeOrder(function (){
    makePayment(function (){
        prepareFood(function(){
            deliverFood()
        })
    })
})

