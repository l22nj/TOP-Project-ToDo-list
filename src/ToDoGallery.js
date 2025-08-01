import {TodoProcessor} from "./ToDoProcessor.js";
import {TodoDisplayer} from "./ToDoDisplayer.js";
import {TodoStorage} from "./ToDoStorage.js";

class TodoGallery {
    constructor() {
        this.array = [];
        this.processor = TodoProcessor(this);
        this.display = TodoDisplayer(this);
        this.storage = TodoStorage(this);
    }
    update() {
        this.display.update();
        this.storage.updateLocalStorage();
    }
    clear() {
        this.array.length = 0;
        this.update();
    }
    initialize() {
        this.storage.getLocalStorage();
        this.display.update();
    }
    addByProperties(taskName, deadline, priority, description="") {
        this.processor.addTodoByProperties(taskName, deadline, priority, description);
        this.update();
    }
    add(todo) {
        this.processor.addTodo(todo);
        this.update();
    }
    remove(i) {
        this.processor.removeTodoById(this.array[i].getId());
        this.update();
    }
    toggle(i) {
        this.processor.toggleStatusById(this.array[i].getId());
        this.update();
    }
    removeById(id) {
        this.processor.removeTodoById(id);
        this.update();
    }
    toggleById(id) {
        this.processor.toggleStatusById(id);
        this.update();
    }
}

export default new TodoGallery();
