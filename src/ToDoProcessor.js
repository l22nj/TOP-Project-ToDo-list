import {Todo} from "./ToDoModule.js";

export function TodoProcessor(todoGallery) {
    for (let todo of todoGallery.array) {
        if (!(todo instanceof Todo)) {
            throw new Error('todoGallery array is not of todos')
        }
    }
    function sortByCreated() {
        todoGallery.array.sort((a,b) => {
            return a.getCreatedAt - b.getCreatedAt;
        })
    }
    function sortByCreatedReverse() {
        todoGallery.array.sort((a,b) => {
            return b.getCreatedAt - a.getCreatedAt;
        })
    }
    function sortByTimeRemaining() {
        todoGallery.array.sort((a, b) => {
            return a.getTimeLeft() - b.getTimeLeft();
        })
    }
    function sortByTimeRemainingReverse() {
        todoGallery.array.sort((a, b) => {
            return b.getTimeLeft() - a.getTimeLeft();
        })
    }
    function sortByAlphabet() {
        todoGallery.array.sort((a,b) => {
            return a.taskName.localeCompare(b.taskName);
        })
    }
    function sortByAlphabetReverse() {
        todoGallery.array.sort((a,b) => {
            return b.taskName.localeCompare(a.taskName);
        })
    }
    function focusPriority() {
        todoGallery.array.sort((a, b) => {
            return b.priority - a.priority;
        })
    }
    function focusPriorityReverse() {
        todoGallery.array.sort((a, b) => {
            return a.priority - b.priority;
        })
    }
    function addTodoByProperties(taskName, deadline, priority, description="") {
        const newTodo = new Todo(taskName, deadline, priority, description);
        todoGallery.array.push(newTodo);
    }
    function addTodo(newTodo) {
        for (let todo of todoGallery.array) {
            if (newTodo.getId() === todo.getId()) {
                throw new Error('todo already in array');
            }
        }
        todoGallery.array.push(newTodo);
    }
    function removeTodoById(id) {
        for (let todo of todoGallery.array) {
            if (todo.getId() === id) {
                todoGallery.array.splice(id, 1);
                return;
            }
        }
        throw new Error('todo with given id not in array');
    }
    function configureTaskNameById(id, taskName) {
        for (let todo of todoGallery.array) {
            if (todo.getId() === id) {
                todo.taskName = taskName;
            }
        }
        throw new Error('todo with given id not in array');
    }
    function getTaskNameById(id) {
        for (let todo of todoGallery.array) {
            if (todo.getId() === id) {
                return todo.taskName;
            }
        }
    }
    function configureDeadlineById(id, deadline) {
        for (let todo of todoGallery.array) {
            if (todo.getId() === id) {
                todo.deadline = deadline;
            }
        }
        throw new Error('todo with given id not in array');
    }
    function getDeadlineById(id) {
        for (let todo of todoGallery.array) {
            if (todo.getId() === id) {
                return todo.deadline;
            }
        }
    }
    function configurePriorityById(id, priority) {
        for (let todo of todoGallery.array) {
            if (todo.getId() === id) {
                todo.priority = priority;
            }
        }
        throw new Error('todo with given id not in array');
    }
    function getPriorityById(id) {
        for (let todo of todoGallery.array) {
            if (todo.getId() === id) {
                return todo.priority;
            }
        }
    }
    function toggleStatusById(id) {
        for (let todo of todoGallery.array) {
            if (todo.getId() === id) {
                if (todo.getStatus() === 'done') {
                    todo.markUnDone();
                    return;
                } else if (todo.getStatus() === 'undone') {
                    todo.markDone();
                    return;
                } else {
                    throw new Error("todo status logged incorrectly in ToDoModule");
                }
            }
        }
    }
    function isTodoDone(id) {
        for (let todo of todoGallery.array) {
            if (todo.getId() === id) {
                if (todo.getStatus() === 'done') {
                    return true;
                } else if (todo.getStatus() === 'undone') {
                    return false;
                } else {
                    throw new Error("todo status logged incorrectly in ToDoModule");
                }
            }
        }
        throw new Error('todo with given id not in array');
    }
    return { sortByCreated, sortByCreatedReverse, sortByTimeRemaining, sortByTimeRemainingReverse, sortByAlphabet,
        sortByAlphabetReverse, focusPriority, focusPriorityReverse, addTodoByProperties, addTodo, removeTodoById,
        configureTaskNameById, getTaskNameById, configureDeadlineById, getDeadlineById, configurePriorityById,
        getPriorityById, toggleStatusById, isTodoDone
    };
}