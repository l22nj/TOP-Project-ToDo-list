import {Todo} from "./ToDoModule";
import {TodoProcessor} from "./ToDoProcessor.js";

class TodoGallery {
    constructor() {
        this.array = [];
        this.processor = TodoProcessor(this.array);
    }
    set array(array) {
        console.log(array);
        console.log("ToDoGallery.js isn't supposed to change initial array");
    }
    set processor(processor) {
        console.log(processor);
        console.log("ToDoGallery.js isn't supposed to change initial processor");
    }
}

export default new TodoGallery();
