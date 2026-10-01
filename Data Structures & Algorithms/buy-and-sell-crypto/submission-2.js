class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0, r = 1;
        let max = 0;
        while ( r < prices.length){
            if ( prices[r] < prices[l]){
                l = r;
                continue;
            } else {
                max = Math.max(max, prices[r] - prices[l]);
                r++;
            }
        }
        return max;
    }
}
