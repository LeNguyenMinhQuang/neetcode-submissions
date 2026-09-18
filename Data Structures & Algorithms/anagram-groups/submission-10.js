class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        let res = [];
        for (let s of strs){
            let sd = s.split("").sort().join("");
            map.has(sd) ? map.get(sd).push(s) : map.set(sd, [s]);
        }
        for (let [k,v] of map){
            res.push(v);
        }
        return res;
    }
}
