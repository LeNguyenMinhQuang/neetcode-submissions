class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let n = nums.length;
        let l = 0, r = n - 1;
        while (l <= r){
            let m = Math.floor((l+r)/2);
            if (nums[m] === target){
                return m;
            } else if (nums[m] >= nums[l]){
                if (target < nums[m] && target >= nums[l]){
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            } else {
                if (target > nums[m] && target <= nums[r]){
                    l = m + 1;
                } else {
                    r = m - 1;
                }
            }
        }
        return -1;
    }
}
