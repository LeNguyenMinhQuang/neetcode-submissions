class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0, j = heights.length - 1;
        let max = 0;
        while (i < j){
            let height = Math.min(heights[i], heights[j]);
            let width = j - i;
            let vol = width * height;
            max = Math.max(max, vol);
            if (heights[i] <= heights[j]) {
                i++;
            } else {
                j--;
            }
        }
        return max;
    }
}
