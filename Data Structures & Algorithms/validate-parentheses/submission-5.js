class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length == 0) return false
        let stack = [];
        let dict = new Map([
            [")","("],["}","{"],["]","["]
        ])
        for (let t of s){
            if (dict.has(t)){
                let ts = stack.pop();
                if (ts !== dict.get(t)){
                    return false;
                }
            } else {
                stack.push(t)
            }
        }
        if (stack.length > 0) {
            return false;
        } else {
            return true;
        }
    }
}
