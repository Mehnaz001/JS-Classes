// // //synchronous -- line by line
// // //asynchronous programming 

// // //async keyword
// // // function getMarks() {
// // //     return 80;
// // // }
// // // console.log(getMarks())

// // // async function getMarks1() {
// // //     return 80;
// // // }
// // // console.log(getMarks1())

// // // async function getDeliveryStatus() {
// // //     return "Your order is delivered"
// // // }
// // // getDeliveryStatus().then(function(status){
// // //     console.log(status)
// // // })

// // //await keyword

// // function orderFood() {
// //     return new Promise(function(resolve,reject){
// //         setTimeout(function (){
// //             resolve("Food delivered!")
// //         },2000)
// //     })
// // }

// // async function trackOrder() {
// //     console.log("Order placed")
// //     let result = await orderFood()
// //     console.log(result)
// // }

// // trackOrder()

// // //promise .then()

// // function getMarks() {
// //     return Promise.resolve(400)
// // }

// // getMarks().then(function(marks){
// //     let percentage = marks/5;
// //     console.log(percentage)
// // })

// // async function calculatePercentage(){
// //     let marks = await getMarks()
// //     let percentage = marks/5;
// //     console.log(percentage)
// // }

// // calculatePercentage()

// function loginUser(email,password){
//     return new Promise(function(resolve,reject){
//         setTimeout(function (){
//             if(email === "admin@gmail.com" && password === "admin123") {
//                 resolve("Login successfull")
//             } else {
//                 reject('Invalid email or password')
//             }
//         },5000)
//     })
// }

// async function login () {
//     console.log("Checking credentials..")
//     try {
//         let msg = await loginUser("user@gmail.com","admin123")
//         console.log(msg);
//         console.log("Opening dashbaord")
//     } catch(error) {
//         console.log(error)
//     }
// }

// login()

// //API - Application programming interface

async function api() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    let data = await response.json()
    console.log(data)
}
api()

//JSON - Javascript object notation
let student = {
    name:"Ali",
    age:34
}