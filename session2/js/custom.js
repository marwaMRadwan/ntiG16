const addTask = document.querySelector("#addTask")   //null <form>
const tableBody = document.querySelector("#tableBody")
const taskHeads = ['title', 'dueDate', 'content','taskType']
//read array data from storage
const readDataFromStorage= (storageKey)=>{
    let data
    try{
        // (typeof data) [] {} object
        data = JSON.parse(localStorage.getItem(storageKey)) || []
        if(!Array.isArray(data)) throw new Error("is not array")
    }
    catch(e){
        data= []
    }
    return data
}
//write array to local storage
const writeDataToStorage = (data, storageKey)=>{
    localStorage.setItem(storageKey, JSON.stringify(data))
}
//add Form data to storage
const formSubmit = function(e){
    e.preventDefault()
    let task = {id:Date.now(), createdAt: new Date()} //{name:"test"}
    taskHeads.forEach(head => task[head]= this.elements[head].value )
    const tasks = readDataFromStorage("tasks")
    tasks.push(task)
    writeDataToStorage(tasks, "tasks")
    this.reset()
    window.location.href="index.html"
}
//create elements with parent, text, classes
const creatMyOwnElements = (parent, htmlElement, txt, classes)=>{
    const myEle = document.createElement(htmlElement)
    parent.appendChild(myEle)
    if(txt) myEle.textContent = txt
    if(classes) myEle.className = classes
    return myEle
}
//delete single task
const delTask = (tasks, i) =>{
    //remove clicked index from array
    tasks.splice(i, 1)
    //save data in localStorage
    writeDataToStorage(tasks,"tasks")
    //rebuild table
    // window.location.reload()
    showAll()
}
//show single task
const showSingle = (task, i, tasks)=>{
    const tr = creatMyOwnElements(tableBody,"tr",null, null)
    creatMyOwnElements(tr,"td",i+1, null)
    taskHeads.forEach(head=>creatMyOwnElements(tr,"td",task[head], null))
    const actionTD = creatMyOwnElements(tr,"td",null, null)
    const showBtn =creatMyOwnElements(actionTD, "button", "show", "btn btn-primary me-2")
    const editBtn = creatMyOwnElements(actionTD, "button", "Edit", "btn btn-warning me-2")
    const delBtn = creatMyOwnElements(actionTD, "button", "Delete", "btn btn-danger me-2")
    delBtn.addEventListener("click", ()=>{delTask(tasks, i)})
}
showAll = () =>{
    //reset tbody
    tableBody.innerHTML=""
    //read data fromstorage
    const tasks = readDataFromStorage("tasks")
    //loop on data
    tasks.forEach((task, index)=> showSingle(task, index, tasks))
}
if(addTask) addTask.addEventListener("submit", formSubmit)

if(tableBody) showAll()
