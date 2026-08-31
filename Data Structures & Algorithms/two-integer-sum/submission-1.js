class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let diff = new Map();
        let n = nums.length;
        for (let i = 0; i<n; i++){
            let dif = target-nums[i];
            diff.set(dif, i);
        }
        for (let i = 0; i<n; i++){
            if(diff.get(nums[i]) && diff.get(nums[i])!== i){
                return [diff.get(nums[i]), i];
            }
        }
    }
}
