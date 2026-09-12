class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
    const stack = [];

    for (let i = 0; i < tokens.length; i++) {
        const t = tokens[i];

        switch (t) {
            case '+': {
                const a = stack.pop();
                stack.push(stack.pop() + a);
                break;
            }
            case '-': {
                const a = stack.pop();
                stack.push(stack.pop() - a);
                break;
            }
            case '*': {
                const a = stack.pop();
                stack.push(stack.pop() * a);
                break;
            }
            case '/': {
                const a = stack.pop();
                // Dùng Bitwise OR với 0 (| 0) thay cho Math.trunc để ép về số nguyên 32-bit nhanh hơn
                stack.push((stack.pop() / a) | 0); 
                break;
            }
            default:
                // Dùng dấu + đằng trước (+t) để ép kiểu nhanh hơn Number(t)
                stack.push(+t);
        }
    }

    return stack[0];
}
}
