// const text = document.getElementById('text')
const container = document.getElementById('container')
// const head = document.querySelector('h4')
let products = document.getElementById('products')
let msg = document.getElementById('message')
// //Child to parent
// console.log(text.parentElement)

// //parent to children
// console.log(container.children[0])

// //Previous Element Sibling
// console.log(text.previousElementSibling)

// //Next Element Sibling
// console.log(head.nextElementSibling)

//Practice - card navigation

//Same page navigation using id and section

//Adding Elements on Page in Dom

//Create Element
let heading = document.createElement('h1')
console.log(heading)

//Adding content
heading.textContent = 'Hello from jS'
console.log(heading)

//Appending to page
container.append(heading)

let card = document.createElement('div')
card.classList.add('product-card')
card.innerHTML = `
     <h2>Phone</h2>
    <button>Buy</button>
`
products.append(card)

//Remove an element
//message.remove() //removing itself

container.removeChild(message)

//Practice -- Create a container in which heading my tasks , and unordered list with id tasklist 
{/* <div id='container'>
    <h2>My tasks</h2>
    <ul id="task-list">
        <li>Study JS</li>
        <li>Revise Concept</li>
    </ul>
</div> */}
//create a list item in js and add it to ul and also remove second task