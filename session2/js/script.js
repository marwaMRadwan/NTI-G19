const addForm = document.querySelector("#addForm")
const taskHeads = ["taskTitle", "taskContent", "age"]
addForm.addEventListener("submit", function(e){
    e.preventDefault()
    // console.log(this)
    // console.log("test")
    // const task = {
    //     taskTitle: addForm.elements['taskTitle'].value,
    //     taskContent: addForm.elements.taskContent.value
    // }
    const task = { status: false, id: Date.now() }
    taskHeads.forEach( h => task[h] = addForm.elements[h].value )
    console.log(task)
})
// read from storage
//union operator ||
const readFromStorage = (key) =>{
    let data 
    try{
        // data = JSON.parse(localStorage.getItem(key)) || [] 
        data = JSON.parse(localStorage.getItem(key))
        if(!Array.isArray(data)) throw new Error("is not array")
    }
    catch(e){
        // console.log(e)
        data = []
    }
    return data
}
// write to storage
const writeDataToStorage = (key, value) =>{
    try{
        localStorage.setItem(key, JSON.stringify(value))
    }
    catch(e){
        localStorage.setItem(key, "[]")
    }
}
// add (create)

// show all (read all)
 
// show single (read single)

// edit (update)

// delete (delete)
