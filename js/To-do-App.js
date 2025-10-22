
let addBtn = document.getElementById("Add-Task");
let deleteBtn = document.getElementById("Delete-Task");
let taskList = document.getElementById("taskitem");
let taskInput = document.getElementById("taskInput");

function addTask() {
    
    let taskText = taskInput.value.trim();

    if (taskText === '') {
      alert('enter a task');
      return;
    }

    let listItem = document.createElement("li");
    listItem.innerText = taskText;

    taskList.appendChild(listItem);

    taskInput.value = " ";

    deleteBtn.addEventListener('click', ()=> {
    taskList.removeChild(listItem);

})
}

addBtn.addEventListener('click', ()=>{
     console.log("btn is clicked")
    addTask();
   
})

