class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0, r = 1, res = 0;
        while (r < prices.length){
            if (prices[r] <= prices[l]){
                l = r;
            } else {
                res = Math.max(res, prices[r] - prices[l]);
            }
            r++;
        }
        return res;
    }
}
