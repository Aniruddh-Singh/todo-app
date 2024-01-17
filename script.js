function addTask() {
    var input = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (input.value.trim() !== "") {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        taskList.appendChild(li);
    }
}
