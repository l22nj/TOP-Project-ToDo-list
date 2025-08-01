import todoGallery from "./ToDoGallery.js";

let form = document.querySelector("#form-add-todo");

form.addEventListener("submit", () => {
    const taskName = document.querySelector("#add-task-name").value;
    const deadline = document.querySelector("#add-deadline").value;
    const priority = document.querySelector("#add-priority").value;
    const description = document.querySelector("#add-description").value;

    todoGallery.addByProperties(taskName, new Date(deadline), priority, description);
})

