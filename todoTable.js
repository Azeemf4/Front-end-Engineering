(function () {
    const todos = [];

    const todoContainer = document.getElementById("todo");
    todoContainer.style.width = "400px";
    todoContainer.style.margin = "40px auto";
    todoContainer.style.fontFamily = "Arial";

    const heading = document.createElement("h2");
    heading.textContent = "Todo App";

    const inputTask = document.createElement("input");
    inputTask.type = "text";
    inputTask.placeholder = "Enter task...";
    inputTask.style.width = "70%";
    inputTask.style.padding = "8px";

    const addBtn = document.createElement("button");
    addBtn.textContent = "Add";
    addBtn.style.marginLeft = "10px";
    addBtn.style.padding = "8px 15px";

    const todoList = document.createElement("div");
    todoList.style.marginTop = "20px";

    todoContainer.append(heading, inputTask, addBtn, todoList);

    function renderTask(task) {

        const todoItem = document.createElement("div");
        todoItem.style.display = "flex";
        todoItem.style.alignItems = "center";
        todoItem.style.justifyContent = "space-between";
        todoItem.style.border = "1px solid gray";
        todoItem.style.padding = "10px";
        todoItem.style.marginBottom = "10px";
        todoItem.style.borderRadius = "8px";

        const p = document.createElement("p");
        p.textContent = task;
        p.style.margin = "0";
        p.style.flex = "1";

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "Complete";

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        // Complete
        completeBtn.addEventListener("click", function () {
            p.style.textDecoration =
                p.style.textDecoration === "line-through"
                    ? "none"
                    : "line-through";
        });

        // Edit
        editBtn.addEventListener("click", function () {

            const newTask = prompt("Edit Task", p.textContent);

            if (newTask && newTask.trim() !== "") {
                const index = todos.indexOf(task);
                todos[index] = newTask;
                p.textContent = newTask;
                task = newTask;
            }

        });

        // Delete
        deleteBtn.addEventListener("click", function () {

            todoItem.remove();

            const index = todos.indexOf(task);

            if (index !== -1) {
                todos.splice(index, 1);
            }

            console.log(todos);

        });

        todoItem.append(p, completeBtn, editBtn, deleteBtn);

        todoList.prepend(todoItem);
    }

    function addTodo() {

        const task = inputTask.value.trim();

        if (task === "") {
            alert("Please enter a task.");
            return;
        }

        todos.unshift(task);

        renderTask(task);

        console.log(todos);

        inputTask.value = "";
        inputTask.focus();

    }

    addBtn.addEventListener("click", addTodo);

    inputTask.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            addTodo();
        }
    });

})();