class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let a = [];
        let n = s.length;
        for (let i = 0; i < n; i++){
            switch (s[i]){
                case "(":
                case "[":
                case "{":
                    a.push(s[i]);
                    break;
                case ")":
                    if (a.length == 0 || a[a.length - 1] != "("){
                        return false;
                    } else {
                        a.pop();
                    }
                    break;
                case "}":
                    if (a.length == 0 || a[a.length - 1] != "{"){
                        return false;
                    } else {
                        a.pop();
                    }
                    break;
                case "]":
                    if (a.length == 0 || a[a.length - 1] != "["){
                        return false;
                    } else {
                        a.pop();
                    }
                    break;
                default:
                    break;
            }

        }
        if (a.length != 0){
            return false;
        }
        return true;
    }
}
