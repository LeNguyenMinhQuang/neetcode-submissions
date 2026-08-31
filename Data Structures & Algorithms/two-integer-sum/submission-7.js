class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const res = new Map();
        const n = nums.length;
        for (let i = 0; i < n; i++){
            let diff = target - nums[i];
            if (res.has(diff)){
                return [res.get(diff), i];
            } else {
                res.set(nums[i], i);
            }
        }
        // const a = nums.sort((a,b)=> a-b)
        // let l = 0;
        // let r = a.length - 1;
        // while (l<r) {
        //     if ((a[l] + a[r]) == target){
        //         return [l,r];
        //     } else if ((a[l] + a[r]) < target) {
        //         l++;
        //     } else {
        //         r--;
        //     }
        // }
        // return [];
    }
}
