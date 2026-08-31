class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {};
        for (let s of strs){
            let count = new Array(26).fill(0);
            for (let char of s){
                let index = char.charCodeAt(0) - "a".charCodeAt(0)
                count[index]+=1;
            }
            const key = count.join(",");
            if(!res[key]){
                res[key] = []
            }
            res[key].push(s);
        }
        return Object.values(res);
    }
}

// let res = {};
//         for (let s of strs){
//             let sorted = s.split("").sort().join("");
//             if (res[sorted] == null){
//                 res[sorted] = [];
//             }
//             res[sorted].push(s);
//         }
//         return Object.values(res);