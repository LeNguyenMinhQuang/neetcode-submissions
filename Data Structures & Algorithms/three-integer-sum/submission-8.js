class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a,b)=> a-b);
        let res = []
        let n = nums.length - 1;
        for (let i = 0; i <= n; i++){
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            let j = i+1, k = n;
            while (j < k) {
                let val = nums[i] + nums[j] + nums[k];
                if (val === 0) {
                    res.push([nums[i], nums[j], nums[k]]);
                    j++; k--;
                    while (j < k && nums[j] === nums[j-1]) j++
                } else if (val < 0) {
                    j++;
                } else {
                    k--;
                }
            }
        }
        return res;
    }
}
