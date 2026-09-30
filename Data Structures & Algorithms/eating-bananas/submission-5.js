class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let minS = 1, maxS = Math.max(...piles);
        let res = maxS;
        while (minS <= maxS){
            let midS = Math.floor((minS + maxS)/2);
            let th = 0;
            for (let p of piles){
                th += Math.ceil(p/midS);
            }
            if (th > h) {
                minS = midS + 1;
            } else {
                res = midS;
                maxS = midS - 1;
            }
        }
        return res;
    }
}
