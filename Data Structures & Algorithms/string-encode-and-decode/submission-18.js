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
        let i = 0;
        let n = str.length;
        let res = [];
        while (i < n){
            let j = str.indexOf("#",i);
            let num = Number(str.slice(i,j));
            let s = str.slice(j+1, j+num+1);
            res.push(s);
            i = j + num + 1;
        }
        return res;
    }
}
