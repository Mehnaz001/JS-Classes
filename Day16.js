//set Timeout

// console.log("Start")
// // for(let i=1; i<=300; i++) {
// //     console.log(i)
// // }
// setTimeout(()=>{
//     console.log("Hi")
// },1000)
// console.log("End")

// function sayHello() {
//     console.log("Hii , Welcome")
// }

// setTimeout(sayHello,2000)

// setTimeout(()=>{
//     console.log("hii , i'm first")
// },2000)
// setTimeout(()=>{
//     console.log("Hii i'm second")
// },3000)
// setTimeout(()=>{
//     console.log("Happy birthday")
// },4000)

//setinterval
// const interval = setInterval(()=>{
//     console.log('hello')
// },2000)

// setTimeout(()=>{
//     clearInterval(interval)
// },8000)

//this 
//this with object
const user = {
    name:"mehnaz",
    greet:function(){
       const inner=()=>{
        console.log(this)
       }
       inner()
    }
}
user.greet()