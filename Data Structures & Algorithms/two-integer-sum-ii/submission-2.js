class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let n = numbers.length -1;
        let i = 0, j = n;
        while (i < j){
            let val = numbers[i] + numbers[j];
            if (val === target) {
                 return [i+1,j+1];
            } else if (val < target) {
                i++;
            } else { j-- }
        }
        return []
    }
}
