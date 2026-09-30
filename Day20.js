//DOM - Document Object Model

//Selecting Elements

//Return element
const heading = document.getElementById('heading')
console.log(heading)

//return collection
const heading2 = document.getElementsByClassName('head')
console.log(heading2)

//Return collection
const heading3 = document.getElementsByTagName('h1')
console.log(heading3)

//Query Selectors
const heading4 = document.querySelector('#heading')
const container = document.querySelector('.container')
const heading5 = document.querySelector('h1')
const containers = document.querySelectorAll('.container')

console.log(heading4)
console.log(container)
console.log(heading5)
console.log(containers)