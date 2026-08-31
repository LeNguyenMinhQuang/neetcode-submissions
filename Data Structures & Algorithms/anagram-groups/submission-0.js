class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {};
        for (let s of strs){
            let sorted = s.split("").sort().join("");
            if (res[sorted] == null){
                res[sorted] = [];
            }
            res[sorted].push(s);
        }
        return Object.values(res);
    }
}

