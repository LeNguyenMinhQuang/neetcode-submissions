class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let n = heights.length;
        let max = 0;
        let i = 0, j = n-1;
        while (i<j){
            let w = j-i;
            let h = Math.min(heights[i], heights[j]);
            max = Math.max(max, w*h);
            if (heights[i] <= heights[j]){
                i++;
            } else {
                j--;
            }
        }
        return max;
    }
}
