class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1, r = Math.max(...piles);
        let res = r;
        while ( l <= r){
            let m = Math.floor((l+r)/2);
            let th = 0;
            for (let p of piles){
                th += Math.ceil(p/m);
            }
            if (th <= h){
                res = m;
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
        return res;
    }
}
