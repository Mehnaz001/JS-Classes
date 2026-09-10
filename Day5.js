// // //Q-1. Find the largest of three numbers
// // let a = 25;
// // let b = 40;
// // let c = 30;

// // if (a >= b && a >= c) {
// //     console.log("Largest:", a);
// // } else if (b >= a && b >= c) {
// //     console.log("Largest:", b);
// // } else {
// //     console.log("Largest:", c);
// // }

// // //Q-2. Print grade based on marks
// // let marks = 85;

// // if (marks >= 90 && marks <= 100) {
// //     console.log("A");
// // } else if (marks >= 80 && marks <= 89) {
// //     console.log("B");
// // } else if (marks >= 70 && marks <= 79) {
// //     console.log("C");
// // } else if (marks >= 60 && marks <= 69) {
// //     console.log("D");
// // } else {
// //     console.log("Fail");
// // }

// // //Q-3. Simple Calculator
// // let num1 = 20;
// // let num2 = 5;
// // let operator = "*";

// // if (operator === "+") {
// //     console.log(num1 + num2);
// // } else if (operator === "-") {
// //     console.log(num1 - num2);
// // } else if (operator === "*") {
// //     console.log(num1 * num2);
// // } else if (operator === "/") {
// //     console.log(num1 / num2);
// // } else {
// //     console.log("Invalid operator");
// // }

// // //Q-5. Check Leap Year
// // //A year is a leap year if it is divisible by 4 and not divisible by 100, OR it is divisible by 400.

// // let year = 2024;

// // if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
// //     console.log("Leap Year");
// // } else {
// //     console.log("Not a Leap Year");
// // }

// // //Q-6. Job Interview Eligibility

// // //Condition:

// // //Age ≥ 18 AND (BCA OR MCA)

// // let age = 20;
// // let qualification = "BCA";

// // if (age >= 18 && (qualification === "BCA" || qualification === "MCA")) {
// //     console.log("Eligible for interview");
// // } else {
// //     console.log("Not eligible");
// // }

// // //Important: Parentheses are necessary here because && should apply to the whole qualification condition.

// // //Q-7. Check Two-Digit Number
// // let num = 45;

// // if (num >= 10 && num <= 99) {
// //     console.log("Two-digit number");
// // } else {
// //     console.log("Not a two-digit number");
// // }

// // //For negative two-digit numbers like -45, use:

// // if ((num >= 10 && num <= 99) || (num <= -10 && num >= -99)) {
// //     console.log("Two-digit number");
// // } else {
// //     console.log("Not a two-digit number");
// // }


// // //Q-9. Positive Even, Positive Odd, or Negative

// // let num = 17;

// // if (num > 0 && num % 2 === 0) {
// //     console.log("Positive and Even");
// // } else if (num > 0 && num % 2 !== 0) {
// //     console.log("Positive and Odd");
// // } else if (num < 0) {
// //     console.log("Negative");
// // } else {
// //     console.log("Zero");
// // }

// //Switch statement 
// let num1 = 90
// let num2 = 78
// let operator = "*"

// switch (operator) {
//     case "+":
//         console.log(num1+num2)
//     case '-':
//         console.log(num1-num2)
//     case '*':
//         console.log(num1*num2)
//         break;
//     case '/':
//         console.log(num1/num2)
//     default:
//         console.log("Invalid operator")
// }

// //practice question - color - red -> stop, yellow -> slow down, green - go , broken light


// alert("Something is wrong!")
// let name = prompt("Enter you name:")
// console.log(name)

let num = Number(prompt("enter a number"))
console.log(typeof(num))
