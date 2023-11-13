const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

taskList.addEventListener("click", (e) => {
  console.log("e", e);

  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");

    saveData();

    return;
  }

  if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();

    saveData();

    return;
  }
});

function addTask() {
  if (taskInput.value == "") {
    alert("Ingrese una tarea");

    return;
  }

  let newTask = document.createElement("li");

  newTask.classList.add("task");
  newTask.innerHTML = taskInput.value;

  let closeButton = document.createElement("span");

  closeButton.classList.add("closeButton");
  closeButton.innerHTML = "\u00d7";

  newTask.appendChild(closeButton);
  taskList.appendChild(newTask);

  taskInput.value = "";

  saveData();
}

function saveData() {
  localStorage.setItem("Pratice1_data", taskList.innerHTML);
}

function chargeData() {
  taskList.innerHTML = localStorage.getItem("Pratice1_data");
}

chargeData();
