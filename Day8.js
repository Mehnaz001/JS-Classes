//Array Reference - address in memory

let arr1 = [1,2,3]
let arr2 = arr1
arr2.push(4)

console.log(arr1)
console.log(arr2)

//Spread operator
arr3 = [...arr1]
arr3.push(4)

console.log(arr1)
console.log(arr3)

//Constant Arrays
const arr4 = [1,2,3]
arr4[0] = 10
arr4.push(6)
console.log(arr4)

// arr4 = [4,5,6]
// console.log(arr4)

//Nested Array - array of arrays
//multi dimensional array

let nums = [2,4,[5,6],7]
console.log(nums[2][1])

let matrix = [[2,4],[3,6],[4,8]]
console.log(matrix[2][1])

let row = matrix[0]
row[0] = 100
console.log(matrix)

//Practice ques 1 - change 40 to 100
let arr = [[10,20],[30,40],[50,60]]
arr[1][1] = 100
console.log(arr)

//ques 2 - 
let arr6 = [[1,2],[3,4]]
let x = arr6[0]
let y= arr6[0]
x[0] = 50

console.log(arr6)
console.log(x)
console.log(y)