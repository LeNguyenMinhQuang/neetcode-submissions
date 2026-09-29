class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let n = nums.length;
        let map = new Map();
        let arr = Array.from({length : n+1},()=> []), res = [];
        for (let num of nums) {
            !map.has(num) ? map.set(num,1) : map.set(num, map.get(num) + 1);
        }
        for (let [k,v] of map){
            arr[v].push(k);
        }
        for (let j = n; j >= 0; j--){
            if (arr[j].length > 0){
                for (let a of arr[j]){
                    if (res.length == k){
                        break;
                    }
                    res.push(a);
                }
            }
        }
        return res;
    }
}
