class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let sorted = nums.sort((a,b) => a-b);
        let sum2 = sorted.map((i) => (0-i));
        let res = [];
        for (let i = 0; i < nums.length; i++){
            let s = sum2[i];
            let temp = [...nums];
            temp.splice(i,1);
            let diff = new Map();
            for (let j = 0; j < temp.length; j++){
                let value = s - temp[j];
                diff.set(value, j);
            }
            for (let j = 0; j < temp.length; j++){
                if(diff.has(temp[j]) && j != diff.get(temp[j])){
                    let temp2 = [];
                    temp2.push(sorted[i]);
                    temp2.push(temp[diff.get(temp[j])]);
                    temp2.push(temp[j]);
                    temp2.sort();
                    console.log(temp2);
                    res.push(temp2);
                }
            }
        }
        let newRes = res.map(i => i.join(","));
        let lastRes = new Set([...newRes]);
        let lastRes2 = Array.from(lastRes).map(i => i.split(",").map(e => parseInt(e)));
        return lastRes2;
    }
}
