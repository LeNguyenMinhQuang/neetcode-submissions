class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for (let t of tokens) {
            if (t == "+" || t == "-" || t == "*" || t == "/") {
                let b = Number(stack.pop());
                let a = Number(stack.pop());
                let c = 0;
                if ( t == "+" ){
                    c = a + b;
                } else if ( t == "-" ) {
                    c = a - b;
                } else if ( t == "*" ) {
                    c = a * b;
                } else if ( t == "/" ) {
                    c = Math.trunc(a/b);
                }
                stack.push(c);
            } else {
                stack.push(t);
            }
        }
        return stack.pop();
    }
}
