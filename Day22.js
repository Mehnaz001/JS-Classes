const title = document.getElementById('title')
title.style.color = "red"
title.style.backgroundColor = "yellow"

// const box = document.getElementById('box')
// box.textContent = "Box"
// box.style.color = "white"
// box.style.backgroundColor = "black"
// box.style.width = "200px"
// box.style.height = "100px"

//ClassList
const box = document.getElementById('box')
box.classList.add('box','green')
console.log(box.classList)
box.classList.remove('green')
console.log(box.classList.contains('green'))