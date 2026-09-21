//Objects - used to store key -value pairs

//Create an object
const user = {
    name:"Mehnaz",
    age:20
}
console.log(user.name)
console.log(user["name"])

//Practice - create a student object with name,age and course and print them

//Add/update/delete

user.city = "Ludhiana" //add
console.log(user)

user.age = 21 //update
console.log(user)

delete user.age //delete
console.log(user)

//Practice q2 - Create a product object with name and price and then add brand , change the price . then delete brand

//object with different data types
const student = {
    name:"Mehnaz",
    age:20,
    isStudent:true,
    skills:["HTML","CSS","JS"],
    address: {
        city:"Ludhiana",
        state:"Punjab"
    }
}

console.log(student)

//Practice q3 - create an object candidate with name,age,skills,address

//object of objects
const classInfo = {
    mehnaz:{
        grade:"A+",
        city:"Ludhiana"
    },
    student2:{
        grade:"A",
        city:"abcs"
    },
    student3:{
        grade:"C",
        city:'xyz'
    }
}

console.log(classInfo)
console.log(classInfo.student3)
console.log(classInfo.student3.city)

for(const key in classInfo) {
    console.log(key,classInfo[key])
}

//Practice q3 - print every property and value using loop

//Math object
console.log(Math.random())
let num = Math.random()
num = num*10

num = Math.floor(num)
console.log(num)

