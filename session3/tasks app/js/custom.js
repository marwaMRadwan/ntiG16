const addTask = document.querySelector("#addTask")   //null <form>
const tableBody = document.querySelector("#tableBody")
const taskHeads = ['title', 'dueDate', 'content','taskType']
const tableSingle = document.querySelector("#tableSingle")
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
const makeEvent = (i, link)=>{
    //add selected id in storage
    localStorage.setItem("showId", i)
    //redirct single.html
    window.location.href=link
    // window.open("single.html", "_blank")
}
//show single task
const showSingle = (task, i, tasks, tableBody)=>{
    const tr = creatMyOwnElements(tableBody,"tr",null, null)
    creatMyOwnElements(tr,"td",i+1, null)
    taskHeads.forEach(head=>creatMyOwnElements(tr,"td",task[head], null))
    const actionTD = creatMyOwnElements(tr,"td",null, null)
    const showBtn =creatMyOwnElements(actionTD, "button", "show", "btn btn-primary me-2")
    const editBtn = creatMyOwnElements(actionTD, "button", "Edit", "btn btn-warning me-2")
    const delBtn = creatMyOwnElements(actionTD, "button", "Delete", "btn btn-danger me-2")
    delBtn.addEventListener("click", ()=>{ delTask(tasks, i) })
    // show button logic
    showBtn.addEventListener("click", ()=> makeEvent(i, "single.html"))
    editBtn.addEventListener("click", ()=> makeEvent(i, "edit.html"))
}
showAll = (tableBody) =>{
    //reset tbody
    tableBody.innerHTML=""
    //read data fromstorage
    const tasks = readDataFromStorage("tasks")
    //loop on data
    tasks.forEach((task, index)=> showSingle(task, index, tasks, tableBody))
}
if(addTask) addTask.addEventListener("submit", formSubmit)

if(tableBody) showAll(tableBody)

if(tableSingle){
    //read all tasks
    const tasks = readDataFromStorage("tasks")
    //get current task  id from storage
    const i = parseInt(localStorage.getItem("showId"))
    //get task with index find
    //const task = tasks[i]
    const task = tasks.find( (t,ind) => ind == i )
    //call show function
    showSingle(task, i, tasks, tableSingle)
}
//get edit task form from screen
const editTask= document.querySelector("#editTask")
if(editTask){
    //set tasks as global variable on page
    const tasks = readDataFromStorage("tasks")
    //get current task  id from storage
    const i = parseInt(localStorage.getItem("showId"))
    //set form values with my task
    taskHeads.forEach(head=> editTask.elements[head].value = tasks[i][head])
    //on submit form
    editTask.addEventListener("submit", function(e){
        //remove form defaults
        e.preventDefault()
        //get data from form and update my array
        taskHeads.forEach(head => tasks[i][head]= e.target.elements[head].value )
        //update storage
        writeDataToStorage(tasks, "tasks")
        //reset form
        this.reset()
        //redirect to index
        window.location.href="index.html"
    })
}









