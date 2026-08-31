class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return "";
        let res = "";
        let len = "";
        for (let s of strs){
            res += s;
            len += `${s.length},`;
        }
        res = len + "#" + res;
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str.length === 0) return [];
        let sizes = [], res = [], i = 0;
        while (str[i] !== '#') {
            let cur = "";
            while (str[i] !== ',') {
                cur += str[i];
                i++;
            }
            sizes.push(parseInt(cur));
            i++;
        }
        i++;
        for (let sz of sizes) {
            res.push(str.substr(i, sz));
            i += sz;
        }
        return res;
    }
}
