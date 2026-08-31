class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const n = nums.length;
        const res = new Map();
        for (let i = 0; i < n; i++){
            let dif = target - nums[i];
            if (res.has(dif)){
                return [res.get(dif), i];
            } else {
                res.set(nums[i], i)
            }
        }
        return []
    }
}
