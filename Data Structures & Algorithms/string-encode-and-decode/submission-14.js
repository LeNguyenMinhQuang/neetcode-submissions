class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let s = '';
        for (let str of strs){
            let n = str.length;
            s += `${n}#${str}`
        }
        return s;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        let arr = [];
        while ( i < str.length){
            let j = str.indexOf('#', i);
            let length = Number(str.slice(i,j));
            let s = str.slice(j+1, j+1+length);
            arr.push(s);
            i = j+1+length;
        }
        return arr
    }
}
