class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let minspeed = 1;
        let maxspeed = Math.max(...piles);
        let res = maxspeed;
        while ( minspeed <= maxspeed ){
            let mid = Math.floor((minspeed + maxspeed)/2);
            let totalHours = 0;
            for (let p of piles){
                totalHours += Math.ceil(p/mid);
            }
            if (totalHours > h){
                minspeed = mid + 1;
            } else {
                res = mid;
                maxspeed = mid - 1;
            }
        }
        return res;
    }
}
