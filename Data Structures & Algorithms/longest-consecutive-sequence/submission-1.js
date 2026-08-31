class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let a = Array.from(set).sort((a,b)=> a-b);
        let count = 0;
        let temp = 0;
        let l = a.length;
        for (let i = 0; i < l; i++) {
            if (a[i+1] - a[i] == 1){
                temp += 1;
            } else {
                count = Math.max(count, temp +1);
                temp = 0;
            }
        }
        return count
    }
}
