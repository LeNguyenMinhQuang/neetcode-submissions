class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let n = heights.length;
        let i = 0, j = n-1;
        let max = 0;
        while (i < j){
            let height = Math.min(heights[i], heights[j]);
            let width = j - i;
            max = Math.max(max, height * width);
            if (heights[i] <= heights[j]){
                i++;
            } else {
                j--;
            }
        }
        return max;
    }
}
