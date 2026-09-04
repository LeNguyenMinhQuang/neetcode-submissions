class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        let s1 = "", s2 = "", n = s.length;
        
        // Dùng Math.floor để đảm bảo số nguyên
        for (let i = 0; i < Math.floor(n / 2); i++) {
            s1 += s[i];
            s2 += s[n - 1 - i];
        }
        
        return s1 === s2;
    }
}
