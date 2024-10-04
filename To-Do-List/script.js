
function addTask() {
    let newTask = document.createElement('li')
    let taksList = document.getElementById('taskList')
    taksList.append(newTask)

    if(document.getElementById('inputTask').value === ''){
        alert('Please Enter a Task')
        newTask.remove()
    }
    newTask.innerText = document.getElementById('inputTask').value

    document.getElementById('inputTask').value = ''
    
    deleteTask(newTask)
}

function deleteTask(newTask) {
    let deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'Delete'
    newTask.append(deleteBtn)
    
    deleteBtn.onclick = ()=>{
        newTask.remove()
    }
}