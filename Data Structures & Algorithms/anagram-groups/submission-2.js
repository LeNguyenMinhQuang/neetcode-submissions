class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = new Map();
        const ss = new Set();
        for (let t of strs){
            let sorted = t.split("").sort().join();
            if (!ss.has(sorted)){
                res.set(sorted, [t]);
                ss.add(sorted);
            } else {
                let cur = [...res.get(sorted), t];
                res.set(sorted, cur);
            }
        }
        return [...res.values()];
    }
}
