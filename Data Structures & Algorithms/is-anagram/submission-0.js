class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length){
            return false;
        } else {
            let check1 = {};
            for (let st of s){
                check1[st] = check1[st] ?  check1[st] + 1 : 1;
            }
            let check2 = {};
            for (let st of t){
                check2[st] = check2[st] ? check2[st] + 1 : 1;
            }
            for (let kt in check1){
                if (check1[kt] !== check2[kt]){
                    return false
                }
            }
            return true
        }
    }
}
