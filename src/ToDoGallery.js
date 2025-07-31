import {Todo} from "./ToDoModule";
import {TodoProcessor} from "./ToDoProcessor.js";
import {TodoDisplayer} from "./ToDoDisplayer.js";

class TodoGallery {
    constructor() {
        this.array = [];
        this.processor = TodoProcessor(this);
        this.display = TodoDisplayer(this);
    }
}

export default new TodoGallery();
