class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = new Map();
        for (let t of strs){
            let sorted = t.split("").sort().join("");
            if (!res.has(sorted)){
                res.set(sorted, [t]);
            } else {
                res.get(sorted).push(t);
            }
        }
        return [...res.values()];
    }
}
