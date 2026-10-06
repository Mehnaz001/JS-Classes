const title = document.getElementById('title')
const box = document.querySelector('.box')
const btn = document.getElementById('btn')
const profile = document.getElementById('profile')
const likeBtn = document.getElementById('like')

//Manipulating Style
title.style.color = "red"
title.style.backgroundColor = "yellow"
title.style.backgroundColor = ""

//kebab-case -> background-color 
//camelCase -> backgroundColor 

box.style.backgroundColor = "pink"
box.style.width = "200px"
box.style.height = "200px"
box.style.border = "2px solid black"


//Practice - make a box in html then style width - 300px, height - 150px , background - green, text color - white in js

//ClassList
console.log(btn.classList)

//Adding a classList
btn.classList.add('active')
// profile.classList.add('online')

//Practice - make a notification in html and important style - border red. now add this important class to notification through js

//Remove a classList
btn.classList.remove('active')

//adding Multiple classes 
profile.classList.add('card','online')

console.log(profile.classList.contains('online'))

//Practice - create a div user and add a class logged-in. if classList contains loggedin then print user is logged in

//Toggle a class
console.log(likeBtn)
likeBtn.classList.toggle('active')

//Practice - dark mode - bgcolor - black, color - white apply this on body

//Practice - create a hidden - display-none class and apply all this classList properties