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
        let n = str.length;
        let arr = []
        while (i < n){
            let j = i;
            let num_s = '';
            while (j < n) {
                if (str[j] !== '#'){
                    num_s += str[j];
                    j++;
                } else {
                    let num = Number(num_s);
                    let s = str.slice(j + 1, j + num + 1);
                    arr.push(s);
                    num_s = ''
                    i = j + num + 1;
                    break;
                }
            }
        }
        return arr;
    }
}
