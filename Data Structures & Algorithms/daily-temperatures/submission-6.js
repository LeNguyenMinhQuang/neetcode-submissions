class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(t) {
        let n = t.length;
        let stack = [];
        let res = new Array(n).fill(0);
        for (let i = 0; i < n; i++){
            while (stack.length > 0 && t[i] > t[stack[stack.length - 1]]){
                let prev = stack.pop();
                res[prev] = i - prev;
            }
            stack.push(i)
        }
        return res;
    }
}
