class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let s1 = new Set();
        let l = 0, res = 0;
        for (let r = 0; r < s.length; r++){
            while (s1.has(s[r])){
                s1.delete(s[l]);
                l++;
            }
            s1.add(s[r]);
            res = Math.max(res, r-l+1);
        }
        return res;
    }
}
