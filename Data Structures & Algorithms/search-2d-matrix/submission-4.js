class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let m = matrix.length;
        let n = matrix[0].length;
        let l = 0, r = m*n-1;
        while (l <= r){
            let mi = Math.floor((l+r)/2);
            let row = Math.floor(mi/n);
            let col = mi%n;
            let val = matrix[row][col];
            if (val === target){
                return true;
            } else if (val > target){
                r = mi - 1;
            } else {
                l = mi + 1;
            }
        }
        return false;
    }
}
