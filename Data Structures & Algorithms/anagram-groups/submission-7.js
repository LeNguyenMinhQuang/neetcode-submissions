class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = new Map();
        for (let str of strs) {
            let strd = str.split("").sort().join("");
            if (!res.has(strd)){
                res.set(strd,[str])
            } else {
                res.get(strd).push(str)
            }
        }
        return [...res.values()]
    }
}
