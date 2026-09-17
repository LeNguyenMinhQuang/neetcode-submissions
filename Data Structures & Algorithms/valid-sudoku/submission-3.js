class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rs = Array.from({length: 9}, () => new Set());
        const cs = Array.from({length: 9}, () => new Set());
        const bs = Array.from({length: 9}, () => new Set());
        for (let i = 0; i < 9; i++){
            for (let j = 0; j < 9; j++){
                
                let val = board[i][j];
                if (val == ".") continue;
                let box = Math.floor(i/3)*3 + Math.floor(j/3);
                if (rs[i].has(val)|| cs[j].has(val)|| bs[box].has(val)){
                    return false;
                } else {
                    rs[i].add(val);
                    cs[j].add(val);
                    bs[box].add(val);
                }
            }
        }
        return true;
    }
}
