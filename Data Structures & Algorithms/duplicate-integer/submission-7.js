class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let count = new Set();
        for (let n of nums){
            if (!count.has(n)){
                count.add(n)
            } else {
                return true
            }
        }
        return false
    }
}
