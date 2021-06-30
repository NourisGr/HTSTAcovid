let arrayOfTasks = [];

function start()
{
    document.getElementById("AddTask").addEventListener("click", NewTask);

}

function NewTask() {
    let myFullTaskList = document.getElementById("MyTaskList");
    let newTaskName = document.getElementById("newTask").value;
    let newLiTag = document.createElement("li");
    newLiTag.innerHTML = newTaskName;
    myFullTaskList.append(newLiTag);

    let newSelect = document.createElement("Select");
    newSelect.id = "TasksToDelete";
    for(task of arrayOfTasks){
        let newOption = document.createElement("option");
        newOption.append(task);
        newSelect.append(newOption);
    }
}