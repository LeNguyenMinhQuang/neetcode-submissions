class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const l1 = nums.length;
        const set = new Set(nums);
        if (l1 !== set.size) return true;
        return false;
    }
}
