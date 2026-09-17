// //for of loop

// let arr = [1,2,3,4,5]
// for(let num of arr) {
//     console.log(num)
// }

// let fruits = ["apple", "mango", "banana", "orange"]
// for(let fr of fruits) {
//     console.log(fr)
// }

// for(let i=0; i<fruits.length; i++) {
//     console.log(fruits[i])
// }

// //Practice que - take an array and print all even numbers in it
// // "Javascript" - print every character in this using for of loop
// // let str = "Javascript"

// //nested for of loop
// let heroes = [
//     ["ironman","spiderman","thor"],
//     ["spiderman","wonder woman","batman"]
// ]

// for(let list of heroes) {
//     for(let hero of list) {
//         console.log(hero)
//     }
// }

// //Que - 
let fruits = [
    ["apple","banana"],
    ["mango","orange"],
    ["grapes","kiwi"]
]

//Practice questions

//q1 - Print all numbers from 1 to 100 that are divisible by both 3 and 5.
// for(let i=1; i<=100; i++) {
//     if(i%3==0 && i%5==0) {
//         console.log(i)
//     }
// }

//q2 - Print this pattern using nested loops:
// 1
// 12
// 123
// 1234
// 12345
// for(let i=1; i<=5; i++) {
//     let pattern = ""
//     for(let j=1; j<=i; j++) {
//         pattern = pattern + j
//     }

//     console.log(pattern)
// }

//q3 - Find the second largest number in:
// let arr = [12, 45, 7, 89, 34, 67, 23];
// let largest = arr[0]
// for(let i of arr) {
//     if(i>largest) {
//         largest = i
//     }
// }
// console.log(largest)

// let largest = arr[0]
// let secondLargest = arr[0]

// for(let i of arr) {
//     if(i>largest) {
//         secondLargest = largest
//         largest = i
//     } else if (i > secondLargest && i!=largest) {
//         secondLargest = i
//     }
// }
// console.log(largest)
// console.log(secondLargest)

//q4 - Count how many times the number 5 appears:
let arr = [
  [5, 2, 8, 5],
  [1, 5, 3],
  [5, 7, 5, 9]
];

let count = 0
for(let row of arr) {
    for(let num of row) {
        if(num==5) {
            count ++
        }
    }
}

console.log(count)