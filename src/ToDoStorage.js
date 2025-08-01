import {Todo} from "./ToDoModule";

export function TodoStorage(todoGallery) {

    function updateLocalStorage() {
        localStorage.setItem("todoGallery", JSON.stringify(todoGallery.array));
    }
    function getLocalStorage() {
        todoGallery.array.length = 0;
        const todoArray = JSON.parse(localStorage.getItem("todoGallery"));
        for (let todo of todoArray) {
            let todoObj = new Todo(todo._taskName, new Date(todo._deadline), todo._priority, todo._description);
            todoObj.setId(todo.id);
            todoObj.setCreatedAt(new Date(todo.createdAt));
            todoObj.status = todo.status;
            todoGallery.processor.addTodo(todoObj);
        }
    }
    function clearLocalStorage() {
        localStorage.setItem("todoGallery", "[]");
    }
    function logLocalStorage() {
        console.log(JSON.parse(localStorage.getItem("todoGallery")));
    }

    return {updateLocalStorage, getLocalStorage, clearLocalStorage, logLocalStorage};
}

