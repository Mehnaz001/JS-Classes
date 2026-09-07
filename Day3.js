//Operators in JS

//Arithmetic Operator (+,-,*,/,%,**)

//Unary (++, --)

//Assignment Operator (=, +=, -=, *=, /= , %=)

//Comparison Operator (>, >=, <, <=, ==, !=, ===)

let a = 10;
let b = '10';

console.log(a==b) //only checks value
console.log(a===b) // to check type and value both
console.log('a'>'b') // a - 61 , A- 41 
console.log('*' < '&')
console.log("A".charCodeAt(0)) // to get the ASCII Values

//Conditional Statements 

//if
let age = 18

// if(age>18) {
//     console.log("adult")
// }

//if-else
if(age>18) {
    console.log("You can vote")
} else {
    console.log("You can't vote")
}

// else if 
let marks = 75;

if(marks >= 80) {
    console.log("A+")
} else if(marks>=60) {
    console.log("A")
} else if( marks>=30) {
    console.log("B")
} else {
    console.log("Fail")
}

// nested if-else
if(marks>=30) {
    if(marks>=80) {
        console.log("A")
    } else {
        console.log("Pass")
    }
} else {
    console.log("fail")
}

let num = Number(prompt("Enter a num"))

//Practice Questions

//Postive or Negative or zero
//Even or odd
//Shopping amount - 5000+ -> 50% 3000 -> 20% 1000 -> 5% less than - no discount
