const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;

class Todo {
    #id;
    #createdAt;
    #taskName;
    #deadline;
    #priority;

    constructor(taskName, deadline, priority) {
        this.#id = crypto.randomUUID();
        this.#createdAt = new Date();
        this.setTaskName(taskName);
        this.setDeadline(deadline);
        this.setPriority(priority);
    }

    set taskName(taskName) {
        if (typeof(taskName) === 'string' && taskName.length < 70 && taskName.length > 1) {
            this.#taskName = taskName;
            return;
        } this.#taskName = null;
    }
    getTaskName() {
        return this.#taskName;
    }

    setDeadline(deadline) {
        if (deadline instanceof Date && deadline > this.createdAt) {
            this.#deadline = deadline;
            return;
        } this.#deadline = null;
    }
    getDeadline() {
        return this.#deadline;
    }

    setPriority(priority) {
        if (priority > 0 && priority <= 10) {
            this.#priority = priority;
            return;
        } this.#priority = priority;
    }Date.parse(
    getPriority() {
        return this.#priority;
    }
    daysLeft() {
        return Math.ceil((this.#deadline - this.#createdAt) / MILLISECONDS_IN_DAY);
    }
}