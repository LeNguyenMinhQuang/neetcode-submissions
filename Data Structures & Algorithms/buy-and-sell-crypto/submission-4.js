class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0, r = 1, max = 0;
        while (r < prices.length){
            if (prices[r] < prices[l]){
                l = r
            } else {
                max = Math.max(max, prices[r]- prices[l]);
            }
            r++;
        }
        return max;
    }
}
