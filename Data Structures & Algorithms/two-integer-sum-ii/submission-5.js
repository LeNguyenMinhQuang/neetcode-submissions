class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0, r = numbers.length - 1;
        while (l < r){
            let val = numbers[l] + numbers[r];
            if (val === target){
                return [l+1, r+1];
            } else if (val > target){
                r--;
            } else {
                l++
            }
        }
        return [];
    }
}
