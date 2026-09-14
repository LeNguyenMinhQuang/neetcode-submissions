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
        let n = str.length;
        let res = [];
        let i = 0;
        while ( i < n ){
            let j = str.indexOf('#',i);
            let num = Number(str.slice(i,j));
            let txt = str.slice(j+1, j+num+1);
            res.push(txt);
            i = j+num+1;
        }
        return res;
    }
}
