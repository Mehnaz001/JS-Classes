//Event Listeners
const btn = document.getElementById('btn')
const msg = document.getElementById('message')
const product = document.getElementById('product')
const theme = document.getElementById('theme')
const input = document.querySelector('#search')

btn.addEventListener('click',function () {
    message.textContent = "You liked this post "
})

//Mouse event
product.addEventListener('mousemove',function (){
    product.style.backgroundColor = "lightgray"
})

//onclick event
function sayHello() {
    alert("hello")
}
btn.onclick = function () {
    alert("hello")
}

//onclick v/s event listener
theme.onclick = function () {
    document.body.style.backgroundColor = "black"
}
theme.onclick = function () {
    theme.style.backgroundColor = "green"
}

theme.addEventListener('click',function() {
    document.body.style.backgroundColor = "black"
})
theme.addEventListener('click',function(){
    theme.style.backgroundColor = "green"
})

//keyboard events
input.addEventListener('keydown',function(event){
    if(event.key == 'Enter') {
        console.log("Searching for", input.value)
    }
})

//practice - create a tubelight with on off switch