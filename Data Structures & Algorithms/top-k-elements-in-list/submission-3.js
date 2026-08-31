class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        for (let n of nums){
            // map.has(n) ? map.set(n,map.get(n) + 1) : map.set(n,1)
            map.set(n, map.has(n)? map.get(n) + 1 : 1)
        }
        let arr = [];
        let n = nums.length;
        let res = []
        for (let i = 0; i <= n; i++){
            arr.push([]);
        }
        for (let [key,val] of map){
            arr[val].push(key);
        }
        for (let i = n; i >= 0; i--){
            if(arr[i].length !== 0){
                for (let j of arr[i]){
                    res.push(j);
                    if(res.length == k){
                        return res;
                    }
                }
            }
        }
        return res;
    }
}
