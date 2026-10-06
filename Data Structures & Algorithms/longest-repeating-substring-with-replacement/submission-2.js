class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0, maxFreq = 0, maxLen = 0;
        let map = new Map();
        for (let r = 0; r < s.length; r++){
            map.has(s[r]) ? map.set(s[r],map.get(s[r])+1) : map.set(s[r],1);
            maxFreq = Math.max(maxFreq, map.get(s[r]));
            if ((r - l + 1 -maxFreq) > k){
                map.set(s[l], map.get(s[l]) - 1);
                l++;
            }
            maxLen = Math.max(maxLen, r-l+1);
        }
        return maxLen;
    }
}
