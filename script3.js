function addTask() {

    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if(taskText === "") {
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = taskText;

    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    editBtn.onclick = function() {
        let newTask = prompt("Edit Task", span.textContent);

        if(newTask !== null && newTask !== "") {
            span.textContent = newTask;
        }
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}