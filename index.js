const tasksForm = document.querySelector("form")
const tasks = document.querySelector("#tasks")



function createTask(taskName){
    const taskId = crypto.randomUUID()
    const taskTemplate = `<input type="checkbox" name=${taskId} id=${taskId}>
            <label for=${taskId}>${taskName}</label>`

    const task = document.createElement("div");

    task.className = "task"

    task.innerHTML = taskTemplate;

    tasks.appendChild(task)
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