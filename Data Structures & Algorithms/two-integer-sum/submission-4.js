class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const res = new Map();
        const n = nums.length;
        for (let i = 0; i < n; i++){
            let diff = target - nums[i];
            if (res.has(diff)){
                return [res.get(diff), i];
            } else {
                res.set(nums[i], i);
            }
        }
    }
}
