class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let n = heights.length;
        let max = 0;
        let i = 0, j = n-1;
        while (i < j){
            let h = Math.min(heights[i], heights[j]);
            let w = j - i;
            let vol = w * h;
            max = Math.max(max, vol);
            if (heights[i] <= heights[j]){
                i++;
            } else {
                j--
            }
        }
        return max;
    }
}
