class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2 !== 0) return false;
        let dict = new Map([
            [")","("], ["]","["],["}","{"]
        ])
        let stack = [];
        for (let c of s){
            if (c == "(" || c == "{" || c == "["){
                stack.push(c)
            } else {
                let o = stack.pop();
                if (o !== dict.get(c)) {
                    return false;
                }
            }
        }
        if (stack.length > 0) {
            return false;
        } else {
            return true;
        }
    }
}
