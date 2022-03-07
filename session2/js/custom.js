const addTask = document.querySelector("#addTask")
const tasks = []
const formSubmit = function(e){
    e.preventDefault()
    // console.log(this.elements.title.value)
    let task = {
        taskTitle: this.elements.title.value,
        taskDueDate: this.elements.dueDate.value,
        taskContent: this.elements.content.value,
        taskType: this.elements.taskType.value
    }
    tasks.push(task)
    console.log(tasks)
}

addTask.addEventListener("submit", formSubmit)

