class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const count = new Map();
        for (let i of s) {
            if (!count.has(i)){
                count.set(i,1);
            } else {
                let c = count.get(i);
                count.set(i, ++c);
            }
        }
        for (let j of t) {
            if (!count.has(j)){
                return false;
            } else {
                let c = count.get(j);
                if (c == 1) {
                    count.delete(j);
                } else {
                    count.set(j, --c);
                }
            }
        }
        if (count.size == 0 ) return true
        return false
    }
}
