class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0;
        let j = numbers.length - 1;
        while (i < j) {
            let a = numbers[i], b = numbers[j];
            if (a + b === target){
                return [i+1, j+1];
            } else if (a + b < target){
                i++;
                continue;
            } else {
                j--;
                continue;
            }
        }
        return [];
    }
}
