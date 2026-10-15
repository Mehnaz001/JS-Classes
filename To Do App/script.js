const taskInput = document.getElementById('taskInput')
const addBtn = document.getElementById('add')
const taskList = document.getElementById('taskList')

let tasks = JSON.parse(localStorage.getItem('tasks')) || []
addBtn.addEventListener('click', function (){
    let task = taskInput.value
    if(task === "") {
        alert("Plz Enter a task")
        return;
    }
    tasks.push(task)
    localStorage.setItem('tasks',JSON.stringify(tasks))

    taskInput.value = ""

    showTasks()
})

function showTasks() {
    taskList.innerHTML = ""
    tasks.forEach(function(task,index){
        let li = document.createElement('li')

        li.innerHTML = `
            ${task} 
            <button class='delete'data-index=${index}> Delete </button>
        `
        taskList.appendChild(li)
    })
}

showTasks()

taskList.addEventListener('click', function (event){
    if(event.target.classList.contains('delete')) {
      let li = event.target.parentElement
      let taskName = li.firstChild.textContent.trim();
      console.log(taskName)
        let index = tasks.indexOf(taskName)
        console.log(index)
      tasks.splice(index,1)

      localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    showTasks()
})