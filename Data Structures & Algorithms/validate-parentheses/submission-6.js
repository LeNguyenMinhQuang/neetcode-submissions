class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2 !== 0) return false;
        let map = new Map([[")","("],["]","["],["}","{"]]);
        let stack = [];
        for (let t of s){
            if (map.has(t)){
                if (stack.pop() !== map.get(t)) return false;
            } else {
                stack.push(t);
            }
        }
        if (stack.length != 0) {
            return false;
        } else {
            return true;
        }
    }
}
