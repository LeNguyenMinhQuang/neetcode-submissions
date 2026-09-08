class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a,b) => a-b)
        const n = nums.length;
        let res = [];
        for (let i = 0; i < n; i++){
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i-1]) continue;
            let j = i + 1, k = n - 1;
            while (j < k){
                let sum = nums[i] + nums[j] + nums[k];
                if (sum === 0) {
                    res.push([nums[i], nums[j], nums[k]]);
                    j++; k--;
                    while (j < k && nums[j] == nums[j-1]) j++
                } else if (sum > 0) {
                    k--;
                } else {
                    j++;
                }
                 
            }
        }
        return res
    }
}
