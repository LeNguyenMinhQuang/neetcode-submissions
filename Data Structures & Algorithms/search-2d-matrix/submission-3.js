class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let m = matrix.length, n = matrix[0].length;
        let l = 0, r = m*n-1;
        while (l <= r){
            let mid = Math.floor((l+r)/2);
            let row = Math.floor(mid/n);
            let col = mid%n;
            let val = matrix[row][col];
            if (val === target){
                return true;
            } else if (val > target){
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return false;
    }
}
