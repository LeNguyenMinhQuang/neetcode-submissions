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
        let res = [];

        while (i < n) {
            let num_str = '';
            let num = 0;
            for (let j = i; j < n; j++) {
                if (str[j] !== '#') {
                    num_str += str[j];
                } else {
                    num = Number(num_str);
                    let tmp = str.slice(j + 1, j + 1 + num);
                    res.push(tmp);
                    i = j + 1 + num;
                    break;
                }
            }
        }
        return res;
    }
}
