const tasksForm = document.querySelector("form")
const tasks = document.querySelector("#tasks")



function createTask(taskName){
    const taskId = crypto.randomUUID()
    const checkBoxId = "tache" + taskId;

    const taskCheckInput = document.createElement("input");
    taskCheckInput.type = "checkbox";
    taskCheckInput.id = checkBoxId;

    const taskLabel = document.createElement("label")
    taskLabel.htmlFor = checkBoxId;
    taskLabel.textContent = taskName

    const br = document.createElement('br');
    const hr = document.createElement('hr');

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Supprimer"

    deleteBtn.addEventListener("click", function (){
        deleteTask(taskId)
    })

    const updateBtn = document.createElement("button");
    updateBtn.textContent = "Modifier"

    updateBtn.addEventListener("click", function (){
        updateTask(taskId)
    })


    const task = document.createElement("div");


    task.className = "task"

    task.id = taskId

    task.append(taskCheckInput, taskLabel, br, deleteBtn, updateBtn, hr)

    tasks.appendChild(task)
}

function deleteTask(taskId){
    const task = document.getElementById(taskId)

    const confirmDeletion = confirm("Voulez-vous supprimer cette tache ?")

    if (confirmDeletion){
        task.remove();
    }
}

function updateTask(taskId) {
    const task = document.getElementById(taskId);
    const newTaskName = prompt("Enter the new task name");

    if (newTaskName) {
        const taskLabel = task.querySelector("label");
        taskLabel.textContent = newTaskName;
    }
}

function addTask(event) {
    const data = new FormData(event.target)

    const { task } = Object.fromEntries(data.entries())

    if(task) {
        createTask(task)
        event.target.reset()
    }


    event.preventDefault();
}


tasksForm.addEventListener("submit", addTask)

