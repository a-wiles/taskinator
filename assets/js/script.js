var formE1 = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do"); 

var taskFormHandler = function(event) { 
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  //Check if input values are empty strings.
  if (!taskNameInput || !taskTypeInput) {
    alert("You need to fill out the task form!");
    return false;

  }
   
  formE1.reset();
  
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
  };
  createTaskE1(taskDataObj);
} 

var createTaskE1 = function(taskDataObj) {
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);
  tasksToDoEl.appendChild(listItemEl);
}

formE1.addEventListener("submit", taskFormHandler);