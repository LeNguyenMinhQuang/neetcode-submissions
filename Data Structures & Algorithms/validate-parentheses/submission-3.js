class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2 === 1) return false;
        const dict = new Map([
            [')','('],
            ['}','{'],
            [']','['],
        ]);
        const stack = [];
        for ( let c of s){
            if (!dict.has(c)){
                stack.push(c);
            } else {
                let _s = dict.get(c);
                let fst = stack.pop();
                if ( _s !== fst ) {
                    return false;
                }
            }
        }
        if (stack.length > 0) {
            return false;
        } else {
            return true;
        }
    }
}
