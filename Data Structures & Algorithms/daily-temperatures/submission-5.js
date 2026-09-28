class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = [];
        let n = temperatures.length;
        let res = Array(n).fill(0);
        for (let i = 0; i < n; i++){
            while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]){
                let prev = stack.pop();
                res[prev] = i - prev;
            }
            stack.push(i);
        }
        return res;
    }
}
