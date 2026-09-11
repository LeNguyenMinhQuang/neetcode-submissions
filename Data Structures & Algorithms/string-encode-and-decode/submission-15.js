class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';
        for (let s of strs){
            let n = s.length;
            res += `${n}#${s}`;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;
        while ( i < str.length){
            let j = str.indexOf("#",i);
            let number = Number(str.slice(i,j));
            let s = str.slice(j + 1, j+ number + 1);
            res.push(s);
            i = j + number + 1;
        }
        return res;
    }
}
