class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};
        for (let str of strs){
            const sorted = str.split("").sort().join();
            if (!res[sorted]){
                res[sorted] = [str]
            } else {
                res[sorted].push(str);
            }
        }
        return Object.values(res);
    }
}
