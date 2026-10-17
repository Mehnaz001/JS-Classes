// Promises in Javascript

// three states - pending, fulfilled, rejected

//Creating a promise
// let myPromise = new Promise(function(resolve,reject){
//     //resolve("order delivered")
//     reject("Order cancel")
// })

// console.log(myPromise)

// //getting result
// myPromise.then(function(result){
//     console.log(result)
// }).catch(function(err){
//     console.log(err)
// }).finally(function (){
//     console.log("order process finished")
// })

// function login(username,password) {
//     return new Promise(function(resolve,reject){
//         if(username==="mehnaz" && password === "1234") {
//             resolve("login successfull")
//         } else {
//             reject("Invalid username or password")
//         }
//     })
// }

// login("mehnaz","124").then(function(result){
//     console.log(result)
// }).catch(function(error){
//     console.log(error)
// })


function getUser() {
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            const user = {
                id:101,
                name:"mehnaz"
            }

            resolve(user)
        },3000)
    })
}

// console.log(getUser())

// getUser().then(function(user){
//     console.log(user)
// }).catch(function(error){
//     console.log(error)
// })

function getCart(userId) {
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(["Laptop","Mouse"])
        },3000)})
}

function getProducts(cart) {
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve([
                {name:"laptop",price:"50000"},{name:"Mouse",price:1000}
            ])
        },3000)})
}


//Promise Chaining concept
getUser().then(function(user){
    console.log(user)
    return getCart(user.id)
}).then(function(cart){
    console.log(cart)
    return getProducts(cart)
}).then(function(products){
    console.log(products)
}).catch(function(err){
    console.log(err)
}).finally(function(){
    console.log("request complted")
})