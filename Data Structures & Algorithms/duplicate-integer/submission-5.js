class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let len = nums.length;
        let counts = {};
        for (let i = 0; i < len; i++){
            counts[nums[i]] = (counts[nums[i]] || 0) + 1;
        }
        for (let num in counts){
            if (counts[num] > 1){
                return true;
            }
        }
        return false;
    }
}
