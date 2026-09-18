class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let m = matrix.length;
        let n = matrix[0].length;
        let l = 0;
        let r = m*n-1;
        while (l <= r){
            let m = Math.floor((l+r)/2);
            let row = Math.floor(m/n);
            let col = m % n;
            let val = matrix[row][col];
            if (val === target){
                return true;
            } else if (val > target){
                r = m - 1;
            } else if (val < target){
                l = m + 1;
            }
        }
        return false;
    }
}
