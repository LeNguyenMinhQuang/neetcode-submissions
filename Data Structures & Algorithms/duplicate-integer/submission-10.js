class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Set();
        for (let n of nums){
            if (!set.has(n)) {
                set.add(n);
            } else {
                return true;
            }
        }
        return false;
    }
}
