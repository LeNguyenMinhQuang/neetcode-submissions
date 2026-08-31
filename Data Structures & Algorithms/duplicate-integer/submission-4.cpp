class Solution {
public:
    bool hasDuplicate(vector<int>& nums) {
        int len = nums.size();
        map<int, int> counts;
        for (int num : nums){
            counts[num]++;
        }
        for (const auto& pair : counts){
            if (pair.second > 1){
                return true;
            }
        }
        return false;
    }
};
