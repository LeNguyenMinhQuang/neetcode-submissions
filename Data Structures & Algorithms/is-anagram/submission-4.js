class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const res = new Map();
        for (let char of s){
            if (!res.has(char)) {
                res.set(char, 1);
            } else {
                res.set(char, res.get(char)+1);
            }
        }
        for (let char1 of t){
            if(!res.has(char1)){
                return false;
            } else {
                if (res.get(char1) == 1){
                    res.delete(char1);
                } else {
                    res.set(char1, res.get(char1)-1);
                }
            }
        }
        if (res.size == 0) {
            return true
        }
        return false
    }
}
