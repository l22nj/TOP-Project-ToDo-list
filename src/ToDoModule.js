export class Todo {

    constructor(taskName, deadline, priority, description="") {
        this.id = crypto.randomUUID();
        this.createdAt = new Date();
        this.status = 'undone';
        this.taskName = taskName;
        this.deadline = deadline;
        this.priority = priority;
        this.description = description;
    }

    set taskName(taskName) {
        if (typeof(taskName) === 'string' && taskName.length <= 70 && taskName.length > 1) {
            this._taskName = taskName;
            return;
        }
        console.log("Error: class Todo, set taskName");
        return 'ERROR';
    }
    get taskName() {
        return this._taskName;
    }

    set deadline(deadline) {
        if (deadline instanceof Date && deadline >= this.createdAt) {
            this._deadline = deadline;
            return;
        }
        console.log("Error: class Todo, set deadline");
        return 'ERROR';
    }
    get deadline() {
        return this._deadline;
    }

    set priority(priority) {
        if (priority > 0 && priority <= 10) {
            this._priority = priority;
            return;
        }
        console.log("Error: class Todo, set priority");
        return 'ERROR';
    }
    get priority() {
        return this._priority;
    }
    set description(description) {
        if (typeof(description) === 'string' && description.length <= 300) {
            if (!description) {
                this._description = '-';
                return;
            }
            this._description = description;
            return;
        }
        console.log("Error: class Todo, set description");
        return 'ERROR';
    }
    get description() {
        return this._description;
    }

    markDone() {
        this.status = 'done';
    }
    markUnDone() {
        this.status = 'undone';
    }
    getStatus() {
        return this.status;
    }
    getTimeLeft() { // in milliseconds
        return this.deadline - new Date();
    }
    getId() {
        return `${this.id}`;
    }
    setId(id) {
        this.id = id;
    }
    getCreatedAt() {
        return this.createdAt;
    }
    setCreatedAt(date) {
        this.createdAt = date;
    }
}

