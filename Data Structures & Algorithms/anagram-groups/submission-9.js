class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        let res = [];
        for (let s of strs){
            let st = s.split("").sort().join("");
            map.has(st) ? map.get(st).push(s) : map.set(st, [s]);
        }
        for (let [k,v] of map) {
            res.push(v);
        }
        return res;
    }
}
