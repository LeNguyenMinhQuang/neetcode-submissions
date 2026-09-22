class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = [];
        let map = new Map();
        for (let s of strs){
            let st = s.split("").sort().join("");
            if (map.has(st)){
                map.get(st).push(s);
            } else {
                map.set(st, [s]);
            }
        }
        return Array.from(map.values());
    }
}
