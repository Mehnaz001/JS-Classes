const heading = document.getElementById('heading')
const para = document.getElementById('para')
const container = document.querySelector('.container')
const image = document.querySelector('img')

console.log(heading)
console.log(para)

//Setting content in objects

//innerText
console.log(heading.innerText)
// heading.innerText = "hello from JS"
// console.log(heading.innerText)

//textContent
console.log(heading.textContent)
para.textContent = "Hii this is para and its text content changed by JS"

console.log(container.innerHTML)
container.innerHTML = '<h2>This is heading 2 from js </h2><button>Click me</button>'

//Getting an attribute
console.log(image.getAttribute('src'))

//Setting an attrubute
image.setAttribute('src',"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSusPMeuicIbCPDKnpN1lG0BgDvBmv9N4fC98caUMo_jg&s=10")
image.setAttribute('alt',"flower-image")

//remove an attribute
image.removeAttribute('src')
image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSusPMeuicIbCPDKnpN1lG0BgDvBmv9N4fC98caUMo_jg&s=10"

//Practice question

//Q1 - Anchor tag - link (facebook) -> github link through js
//Q2 - cat image - dog image through js
//Q3 - div profile - add name , about,contact button 