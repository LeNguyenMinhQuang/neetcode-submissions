class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        set<char> s1;
        int n = s.size();
        int res = 0;
        int left = 0;
        for (int right = 0; right < n; right++){
            while(s1.count(s[right])){
                s1.erase(s[left]);
                left++;
            }
            s1.insert(s[right]);
            res = max(res, right-left+1);
        }
        return res;
    }
};
