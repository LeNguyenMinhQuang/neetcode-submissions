class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if (this.minStack.length === 0) {
            this.minStack.push(val);
        } else {
            val = Math.min(val, this.getMin())
            this.minStack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        let m = this.stack.length;
        return this.stack[m-1];
    }

    /**
     * @return {number}
     */
    getMin() {
        let n = this.minStack.length;
        return this.minStack[n-1];
    }
}
