class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a,b)=>a-b);
        let n = nums.length - 1;
        let res = [];
        for (let i = 0; i < n; i++){
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i-1]) continue;
            let j = i+1, k = n;
            while (j < k){
                let a = nums[i], b = nums[j], c = nums[k];
                if (a + b + c == 0) {
                    res.push([a,b,c]);
                    j++; k--;
                    while (j < k && nums[j] == nums[j-1]) { j++ }
                } else if (a + b + c > 0) {
                    k--;
                } else {
                    j++;
                }
            }
        }
        return res
    }
}
