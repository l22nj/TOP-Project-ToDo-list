import {Todo} from "./ToDoModule.js";

export function TodoProcessor(arr) {
    for (let todo of arr) {
        if (!(todo instanceof Todo)) {
            throw new Error('array is not of todos')
        }
    }
    function sortByCreated() {
        arr.sort((a,b) => {
            return a.getCreatedAt - b.getCreatedAt;
        })
    }
    function sortByCreatedReverse() {
        arr.sort((a,b) => {
            return b.getCreatedAt - a.getCreatedAt;
        })
    }
    function sortByTimeRemaining() {
        arr.sort((a, b) => {
            return a.timeLeft() - b.timeLeft();
        })
    }
    function sortByTimeRemainingReverse() {
        arr.sort((a, b) => {
            return b.timeLeft() - a.timeLeft();
        })
    }
    function sortByAlphabet() {
        arr.sort((a,b) => {
            return a.taskName.localeCompare(b.taskName);
        })
    }
    function sortByAlphabetReverse() {
        arr.sort((a,b) => {
            return b.taskName.localeCompare(a.taskName);
        })
    }
    function focusPriority() {
        arr.sort((a, b) => {
            return a.priority - b.priority;
        })
    }
    function focusPriorityReverse() {
        arr.sort((a, b) => {
            return b.priority - a.priority;
        })
    }
    function addTodo(taskName, deadline, priority) {
        const newTodo = new Todo(taskName, deadline, priority);
        arr.push(newTodo);
    }
    function addReadyMadeTodo(newTodo) {
        for (let todo of arr) {
            if (newTodo.getId() === todo.getId()) {
                throw new Error('todo already in array');
            }
        }
        arr.push(newTodo);
    }
    function removeTodoById(id) {
        for (let todo of arr) {
            if (todo.getId() === id) {
                arr.splice(id, 1);
            }
        }
        throw new Error('todo with given id not in array');
    }
    function configureTaskNameById(id, taskName) {
        for (let todo of arr) {
            if (todo.getId() === id) {
                todo.taskName = taskName;
            }
        }
        throw new Error('todo with given id not in array');
    }
    function getTaskNameById(id) {
        for (let todo of arr) {
            if (todo.getId() === id) {
                return todo.taskName;
            }
        }
    }
    function configureDeadlineById(id, deadline) {
        for (let todo of arr) {
            if (todo.getId() === id) {
                todo.deadline = deadline;
            }
        }
        throw new Error('todo with given id not in array');
    }
    function getDeadlineById(id) {
        for (let todo of arr) {
            if (todo.getId() === id) {
                return todo.deadline;
            }
        }
    }
    function configurePriorityById(id, priority) {
        for (let todo of arr) {
            if (todo.getId() === id) {
                todo.priority = priority;
            }
        }
        throw new Error('todo with given id not in array');
    }
    function getPriorityById(id) {
        for (let todo of arr) {
            if (todo.getId() === id) {
                return todo.priority;
            }
        }
    }
    function isTodoDone(id) {
        for (let todo of arr) {
            if (todo.getId() === id) {
                if (todo.getStatus() === 'done') {
                    return true;
                } if (todo.getStatus() === 'undone') {
                    return false;
                } else {
                    throw new Error("todo status logged incorrectly in ToDoModule");
                }
            }
        }
        throw new Error('todo with given id not in array');
    }
    return { sortByCreated, sortByCreatedReverse, sortByTimeRemaining, sortByTimeRemainingReverse, sortByAlphabet,
        sortByAlphabetReverse, focusPriority, focusPriorityReverse, addTodo, addReadyMadeTodo, removeTodoById,
        configureTaskNameById, getTaskNameById, configureDeadlineById, getDeadlineById, configurePriorityById,
        getPriorityById, isTodoDone
    };
}