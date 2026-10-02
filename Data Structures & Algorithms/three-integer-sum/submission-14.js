class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let n = nums.length;
        let res = [];
        nums = nums.sort((a,b)=> a- b);
        if (nums[0] > 0) return [];
        for (let i = 0; i < n; i ++){
            let j = i+1, k = n -1;
            if ( i>0 && nums[i] === nums[i - 1]) continue;
            while(j<k){
                let val = nums[i] + nums[j] + nums[k]
            if ( val === 0) {
                res.push([nums[i], nums[j], nums[k]]);
                j++; k--;
                while (j<k && nums[j] === nums[j-1]) j++;
            } else if (val < 0){
                j++;
            } else {
                k--;
            }
            }
        }
        return res;
    }
}
