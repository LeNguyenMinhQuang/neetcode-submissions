class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        const n = nums.length;
        const arr = [];
        const res = []
        for (let i = 0; i <= n; i++){
            arr.push([]);
        }
        for (let num of nums){
            map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
        }
        for (let [key, val] of map){
            arr[val].push(key);
        }
        for (let i = n; i>=0; i--){
            if (arr[i].length > 0){
                for (let a of arr[i]){
                    res.push(a);
                    if (res.length === k) return res;
                }
            }
        }
        return res;
    }
}
