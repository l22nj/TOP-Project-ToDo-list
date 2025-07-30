const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;

export class Todo {
    #id;
    #createdAt;

    constructor(taskName, deadline, priority) {
        this.#id = crypto.randomUUID();
        this.#createdAt = new Date();
        this.taskName = taskName;
        this.deadline = deadline;
        this.priority = priority;
    }

    set taskName(taskName) {
        if (typeof(taskName) === 'string' && taskName.length < 70 && taskName.length > 1) {
            this._taskName = taskName;
            return;
        } console.log("Error: class Todo, set taskName");
    }
    get taskName() {
        return this._taskName;
    }

    set deadline(deadline) {
        if (deadline instanceof Date && deadline >= this.#createdAt) {
            this._deadline = deadline;
            return;
        } console.log("Error: class Todo, set deadline");
    }
    get deadline() {
        return this._deadline;
    }

    set priority(priority) {
        if (priority > 0 && priority <= 10) {
            this._priority = priority;
            return;
        } console.log("Error: class Todo, set priority");
    }
    get priority() {
        return this._priority;
    }

    daysLeft() {
        return Math.ceil((this.deadline - this.#createdAt) / MILLISECONDS_IN_DAY);
    }
    getId() {
        return this.#id;
    }
}

