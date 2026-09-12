class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        let map = new Map();
        for (let a of s){
            map.has(a) ? map.set(a, map.get(a) + 1) : map.set(a, 1);
        }
        for (let b of t){
            if (!map.has(b)) return false;
            if (map.get(b) === 1) {
                map.delete(b);
            } else {
                map.set(b, map.get(b) - 1);
            }
        }
        if (map.size > 0) {
            return false;
        } else {
            return true;
        }
    }
}
