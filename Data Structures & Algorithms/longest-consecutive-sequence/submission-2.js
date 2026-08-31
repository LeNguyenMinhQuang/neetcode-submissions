class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        const set = new Set(nums);
        let count = 0;

        for (let n of set){
            if ( !set.has(n-1)) {
                let curNum = n;
                let curLen = 1;

                while (set.has(curNum + 1)){
                    curNum += 1;
                    curLen += 1;
                }

                count = Math.max(count, curLen);
            }
        }

        return count
    }
}
