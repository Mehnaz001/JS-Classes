//Javascript Browser storage

//option 1 - database on server
//option 2 - user device store

//Browser storage is a mechanism provided by browser to store data on user device

//localStorage  - stays eevn after reload, refresh, close , reopen

//local Storage methods

//setItem(key,value) - to set an item
localStorage.setItem('user','mehnaz')
localStorage.setItem('city','khanna')

//getItem - to get an item
console.log(localStorage.getItem('user'))

//removeItem - to remove an item 
localStorage.removeItem('city')

//to clear
localStorage.clear()

localStorage.setItem("age",20)

let age = localStorage.getItem('age')
console.log(age)
console.log(typeof age)

localStorage.clear()

let user = {
    name:"Mehnaz",
    age:20
}

console.log(user)
console.log(JSON.stringify(user))
localStorage.setItem('user', JSON.stringify(user))

let savedUser = JSON.parse(localStorage.getItem('user'))
console.log(savedUser)

let tasks = ["Study","Play game", "drink water"]
localStorage.setItem('tasks', JSON.stringify(tasks))

let savedTasks = JSON.parse(localStorage.getItem('tasks')) || []
console.log(savedTasks)
console.log(savedTasks.length)


//Session storage - stores data for current tab page session
//same method as localStorage
sessionStorage.setItem('name','avcc')
sessionStorage.setItem("username","Ali")

//cookies - small piece of data stored in browser
document.cookie = "username=aabbc; max-age=3"
console.log(document.cookie)


//indexDB - store large amount of data
//cachestorage - for progressive web application
