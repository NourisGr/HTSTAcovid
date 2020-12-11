taskList = [];

function AddMyToDo() {
    let myItemToAdd = document.getElementById("addToDo").value;
    taskList.push(myItemToAdd);
    RefreshList();
}

function RefreshList() {
    document.getElementById("myToDoList").innerHTML = "";
    for (let i = 0; i < taskList.length; i++) {
        let newTask = "<li>" + taskList[i] + "</li>";
        document.getElementById("myToDoList").innerHTML += newTask;
    }
}

function RemoveMyToDo() {
    let myItemToRemove = document.getElementById("removeToDo").value;
    taskList.splice(myItemToRemove, 1);
    RefreshList();
}