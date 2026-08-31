class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set([...nums]);
        let res = 0;
        for (let num of numSet){
           if(!numSet.has(num - 1)){ // điều kiện này để kiểm tra xem nếu số num hiện tại không phải số đầu của dãy thì ko đếm đỡ mất thời gian
                let count = 1;
                while (numSet.has(num + count)){
                    count++;
                }
                res = Math.max(res, count)
           }
        }
        return res;
    }
}
