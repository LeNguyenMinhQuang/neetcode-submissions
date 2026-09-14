class MinStack {
    constructor() {
        this.stack = [];
        this.min = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
       this.stack.push(val);
       this.getMin() < val ? this.min.push(this.getMin()) : this.min.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.min.pop();
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min[this.min.length - 1];
    }
}
