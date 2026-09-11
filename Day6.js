//Strings

let name = "Mehnaz" //double quotes
let num = "123"
let char = '*' //Single quote
let str3 = `Hello world` //Template literal 

//String Concatenation
let firstName = "Mehnaz"
let lastName = "Sheikh"
let fullName = firstName + " " + lastName
console.log(fullName)

//Template Literals
let age = 20
console.log(`My name is ${name} and I am ${age} year old`)

//String Length
console.log(fullName.length)

//String Indices
console.log(name[3])

//String Methods - action performed on objects
//Syntax -  stringName.method()

//1- Trim method
let msg = "    hello    "
console.log(msg.trimStart())
console.log(msg.trimEnd())

//**Strings are immutable in js

//2- toUpperCase() - converts the strings into uppercase
let text = "hello world"
console.log(text.toUpperCase())

//3 - toLowerCase() - converts the strings into lowercase
let text1 = "HELOO WORLD"
console.log(text1.toLowerCase())

//Strings method with Arguments

//4 - charAt - particular index return
console.log(text.charAt(3))

//5 - indexOf - returns the first index of occurence , -1 if not found
let str = "ILoveCoding"
console.log(str.indexOf('C'))
console.log(str.indexOf('W'))

//6 - includes - return true if found , false if not 
let lang = "JavaScript"
console.log(lang.includes("script"))

//7 - startWith() and endWith()
console.log(lang.startsWith("Js"))

//8 - slice() - extract part of string
let str1 = "ILoveProgramming"
console.log(str1.slice(-5))

//9 - replace() - searches a value in string & return a new string with replaced value
let str2 = "ILoveCoding"
console.log(str2.replace("Love","do"))

//10 - repeat() string number of copies
let fruit = "Mango"
console.log(fruit.repeat(3))

//Method Chaining
let nam1 = "    Mehnaz"
console.log(nam1.toUpperCase().trim())