class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let n = heights.length;
        let l = 0, r = n - 1;
        let max = 0;
        while (l < r){
            let h = Math.min(heights[l], heights[r]);
            let w = r - l;
            max = Math.max(max, w * h);
            if (heights[l] <= heights[r]){
                l++;
            } else {
                r--;
            }
        }
        return max;
    }
}
