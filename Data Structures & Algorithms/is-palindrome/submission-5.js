class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        
        let str = s.toLowerCase().replace(/[^a-z0-9]/g,"");
        let le = str.length;
        let s1 = "", s2 = "";
        for (let i = 0; i < le ; i++){
            s1 += str[i];
        }
        for (let i = le - 1; i >= 0 ; i--){
            s2 += str[i];
        }
        if (s1 == s2){
            return true;
        } else {
            return false;
        }
    }
}
