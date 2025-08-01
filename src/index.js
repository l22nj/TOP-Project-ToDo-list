import todoGallery from "./ToDoGallery.js";
import "./parseForm.js"
import "./styles.css"

// let todo = new Todo(":D", new Date("2025-10-10"), 5, "käin jooksmas");
// console.log(todo);
// let todo2 = new Todo("pese pesu ja mängi koeraga ja vaata aknast välja", new Date("2026-07-19"), 6);
// console.log(todo2);
// todoGallery.processor.addTodo(todo)
// todoGallery.processor.addTodo(todo2)

window.todoGallery = todoGallery // for using console to call todoGallery methods in browser
todoGallery.initialize()

