//Logical Operators - to combine expressions

//Logical AND && -- exp1 && exp2

let a = 80;
let b = 60;
let c = 90

if(a<b && a<c) { //both conditions need to be true
    console.log("A is smaller") 
}  
else if(b<a && b<c) {
    console.log("B is smaller")
}
else {
    console.log("C is smaller")
}

///Practice Question -1 - print eligible if age is greater than equal to 18 and less than equal to 60

let age = 23
if(age>=18 && age<=60) {
    console.log("Eligible")
} else {
    console.log("Not eligible")
}

//Practice Question - 2 - take two number and print positive if both numbers are greater than 0
//Practice Question - 3 - if username = "admin" and password is 12345 print welcome else access denied
let username = "abcs" 
let password = 12345

if(username =="admin" && password == 12345) {
    console.log("welcome")
} else {
    console.log("access denied")
}

// true && true -> true
//true && false -> false
//false && false -> false
//false && true -> false

//Logical OR - exp1 || exp2

//true || false -> true
//true || true -> true
//False || true -> true
//false || false -> false

if(a<b || a<c) { //both conditions need to be true
    console.log("A is smaller") 
}  
else {
    console.log("C is smaller")
}

//Practice question - 4 - take a number and print special only if number is 0 or 10 or 15
//Practice Question - 5 - take a character and print vowel only if the character is 'a','e','i','o','u'
//Practice Question - 6 - take a number for day from 1 to 7. print weekend only when the day number is 6 or 7

//Logical NOT - !(exp)
let logIn = true;
if(!logIn) {
    console.log("please log in first")
} else {
    console.log('Welcome')
}

//Practice Question - 7 - Create a variable isRaining = false. Print "Go outside" if it is not raining.
//Practice Ques - 8 - Take a password as input. Print "Wrong password" if the password is not "1234".
//Practice Ques - 9 - Create:let isVerified = false; Print "Please verify your account" if the account is not verified.

//Truthy and Falsy

//FAlse value - false, 0, -0, "", null,undefined, NaN
//Truthy values - everything else is true
