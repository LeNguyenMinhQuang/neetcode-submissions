class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
       let set = new Set(nums);
       let count = 0;
       for (let n of set){
        if (!set.has(n-1)){
            let temp = 1;
            let cur = n;
            while (set.has(cur+1)){
                temp += 1;
                cur += 1;
            }
            count = Math.max(count, temp);
        }
       }
       return count
    }
}
