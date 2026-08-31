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
        let res = [];
        let pos = 0;
        let st1= [], st2 = "";
        let temp = "";
        for (let i=0; i< str.length; i++){
            if (str[i]=== "#"){
                pos = i; break
            }
        }
        for (let i=0; i< pos; i++){
            if (str[i] !== ",") {
                temp += str[i];
            } else {
                st1.push(parseInt(temp));
                temp = "";
            }
        }
        pos++;
        for (let q of st1){
            res.push(str.substr(pos, q));
            pos += q;
        }
        return res;
    }
}
