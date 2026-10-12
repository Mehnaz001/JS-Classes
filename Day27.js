// const parent = document.getElementById('parent')
// const child = document.getElementById('child')
// const grandparent = document.getElementById('grandparent')
// const list = document.getElementById('list')
// const todoList = document.getElementById('todolist')
// const deleteButton = document.getElementById('delete')
// const deleteButton1 = document.getElementById('delete1')

// // parent.addEventListener('click',function (event){
// //     event.stopPropagation()
// //     console.log("parent clicked")
// // })

// // child.addEventListener('click',function (event){
// //     console.log(event)
// //     event.stopPropagation()
// //     console.log("child clicked")
// // })

// grandparent.addEventListener('click',function (){
//     console.log("grandparent clicked")
// })

// //event target vs event current target

// parent.addEventListener('click',function (event){
//     console.log("parent clicked")
//     console.log(event.target)
//     console.log(event.currentTarget)
// })

// child.addEventListener('click',function (event){
//     console.log("Button clicked")
//    console.log(event.target)
//    console.log(event.currentTarget)
// })

// list.addEventListener('click',function(){
//     console.log(event.target) //kisne event trigger kiya
//     console.log(event.currentTarget) //current kis element pr event hai
// })

// deleteButton.addEventListener('click', function (){
//     deleteButton.parentElement.remove()
// })


// deleteButton1.addEventListener('click', function (){
//     deleteButton.parentElement.remove()
// })

// // todoList.addEventListener('click',function(event){
// //     if(event.target.classList.contains('deleteBtn')) {
// //         event.target.parentElement.remove()
// //     }
// // })

const buttons = document.querySelectorAll('button')

buttons.forEach(function (button){
    button.addEventListener('click',function(){
        button.parentElement.remove()
    })
})

//practice task
//make a to do app