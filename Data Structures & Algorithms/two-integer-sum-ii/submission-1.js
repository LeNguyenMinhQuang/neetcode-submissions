class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0, j = numbers.length - 1;
        while (i < j){
            let a  = numbers[i] + numbers[j];
            if ( a === target ) return [i+1,j+1];
            if ( a < target ) i++;
            if ( a > target ) j--;
        }
        return [];
    }
}
