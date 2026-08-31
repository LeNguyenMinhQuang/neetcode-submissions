class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const res = new Set();
        for (let num of nums) {
            if (res.has(num)) return true;
            res.add(num);
        }
        return false;
    }
}
