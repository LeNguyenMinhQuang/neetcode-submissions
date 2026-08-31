class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let len = nums.length;
        let pre = new Array(len);
        let post = new Array(len);
        let res = new Array(len);
        pre[0] = 1;
        post[len-1] = 1;
        for (let i = 1; i < len; i++){
            pre[i] = pre[i-1] * nums[i-1];
        }
        for (let i = len -2; i >=0; i--){
            post[i] = post[i+1] * nums[i+1]
        }
        for (let i = 0; i< len; i++){
           res[i] = pre[i] * post[i];
        }

        return res
    }
}
