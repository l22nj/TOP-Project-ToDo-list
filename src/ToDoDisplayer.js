import {Todo} from "./ToDoModule";

const MILLISECONDS_IN_DAY = 1000*60*60*24;

export function TodoDisplayer(todoGallery) {
    const todoContainer = document.querySelector(".grid-container > .content");

    function clearTodoContainer() {
        while (todoContainer.firstChild) {
            todoContainer.removeChild(todoContainer.lastChild);
        }
    }
    function makeTodo(todo) {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        todoDiv.dataset.id = todo.getId();
        todoContainer.appendChild(todoDiv);

        const taskName = document.createElement("div");
        taskName.classList.add("task-name");
        taskName.innerText = todo.taskName;
        todoDiv.appendChild(taskName);

        const deadline = document.createElement("div");
        deadline.classList.add("deadline");
        deadline.innerText = "due: " + todo.deadline.toUTCString();
        todoDiv.appendChild(deadline);

        const priority = document.createElement("div");
        priority.classList.add("priority");
        priority.innerText = `prio: ${todo.priority}`;
        todoDiv.appendChild(priority);

        const buttons = document.createElement("div");
        buttons.classList.add("buttons");
        todoDiv.appendChild(buttons);

        const editButton = document.createElement("button");
        editButton.classList.add("edit");
        editButton.innerText = "Edit";
        editButton.addEventListener("click", () => {
            alert("edit!!");
        })
        buttons.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", () => {
            todoGallery.processor.removeTodoById(todo.getId());
            todoGallery.display.update();
        })
        buttons.appendChild(deleteButton);

        const showButton = document.createElement("button");
        showButton.classList.add("show");
        showButton.innerText = "Show";
        showButton.addEventListener("click", () => {
            alert(`
                Description:
                ${todo.description}
                Created at:
                ${todo.getCreatedAt().toUTCString()}
                Status:
                ${todo.getStatus()}
                `);
            // Days left:
            //     ${Math.ceil(todo.getTimeLeft() / MILLISECONDS_IN_DAY)}
        })
        buttons.appendChild(showButton);

        const doneButton = document.createElement("button");
        doneButton.classList.add("marker");
        doneButton.innerText = "Mark as done";
        doneButton.addEventListener("click", () => {
            todoGallery.processor.toggleStatusById(todo.getId());
        })
        buttons.appendChild(doneButton);
    }

    function clear() {
        clearTodoContainer();
    }

    function update() {
        clearTodoContainer();
        for (let todo of todoGallery.array) {
            makeTodo(todo);
        }
    }
    return { update, clear };
}