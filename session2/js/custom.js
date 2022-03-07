const addTask = document.querySelector("#addTask")
const taskHeads = ['title', 'dueDate', 'content','taskType']
const readDataFromStorage= (storageKey)=>{
    let data =[]
    try{
        data = JSON.parse(localStorage.getItem(storageKey)) || []
        if(!Array.isArray(data)) throw new Error("is not array")
    }
    catch(e){
        data= []
    }
    return data
}
const writeDataToStorage = (data, storageKey)=>{
    localStorage.setItem(storageKey, JSON.stringify(data))
}
const formSubmit = function(e){
    e.preventDefault()
    let task = {id:Date.now()} //{name:"test"}
    taskHeads.forEach(head=>{
        task[head]= this.elements[head].value
    })
    const tasks = readDataFromStorage("tasks")
    tasks.push(task)
    writeDataToStorage(tasks, "tasks")
}
addTask.addEventListener("submit", formSubmit)