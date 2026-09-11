class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let n = nums.length;
        let map = new Map();
        for (let i = 0; i < n; i++){
            let dif = target - nums[i];
            if (map.has(dif)){
                return [map.get(dif),i];
            } else {
                map.set(nums[i],i);
            }
        }
        return [];
    }
}
