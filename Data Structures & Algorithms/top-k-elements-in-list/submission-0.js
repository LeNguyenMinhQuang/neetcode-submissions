class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let myMap = new Map();
        for (let num of nums){
            if (myMap.has(num)){
                let newValue = myMap.get(num) + 1;
                myMap.set(num, newValue);
            } else {
                myMap.set(num, 1);
            }
        }
        let arr = Array.from(myMap.entries());
        let sortArr = arr.sort((a,b) => b[1] - a[1]);
        let res = [];
        for (let i = 0; i < k; i++){
            res.push(sortArr[i][0]);
        }
        return res;
    }
}
