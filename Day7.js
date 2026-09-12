//Array (Data Structures)

//Linear collection of things

let students = ["Mehnaz", "Arun", "Arshan"]
console.log(students[2])

let nums = [2,4,6,8]
nums[1] = 7
console.log(nums)

let info = ["arshan", 21, 9.3]
console.log(info.length)

//Array method

//1.Push - add to end
info.push("Merut")
console.log(info)

//2.Pop - delete from end and returns it
console.log(info.pop())
console.log(info)

//3.Unshift - add to start
students.unshift("Alice")
console.log(students)

//4. Shift - delete from start & returns it
console.log(students.shift())
console.log(students)

//5. indexOf - returns index of something
let colors = ["red", "yellow", "blue"]
console.log(colors.indexOf("yellow"))

//6. includes - search for a value
console.log(colors.includes("red"))

//7. concat - merge 2 arrays
console.log(students.concat(colors))

//8. Reverse - reverse an array
console.log(colors.reverse())

//9. Sort - sorts an array
console.log(nums.sort())

//10. Slice - copies a portion of an array
console.log(students)
console.log(students.slice(2,4))

//11. Splice - removes/replace/ add elements in place
// splice(start,deleteCount, item())
let fruits = ["apple","mango","banana","orange"]
fruits.splice(2,1)
console.log(fruits)

fruits.splice(1,0,"banana","litchi")
console.log(fruits)

fruits.splice(2,1,"strawberry")
console.log(fruits)