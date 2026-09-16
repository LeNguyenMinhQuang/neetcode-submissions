class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
    let stack = [];
    for (let t of tokens) {
        if (t === "+" || t === "-" || t === "*" || t === "/") {
            let b = stack.pop();
            let a = stack.pop();
            let c;
            if (t === "+") {
                c = a + b;
            } else if (t === "-") {
                c = a - b;
            } else if (t === "*") {
                c = a * b;
            } else if (t === "/") {
                c = Math.trunc(a / b);
            }
            stack.push(c);
        } else {
            // Đẩy số vào stack và ép kiểu string -> number ngay tại đây
            stack.push(Number(t));
        }
    }
    return stack[0];
}
}
