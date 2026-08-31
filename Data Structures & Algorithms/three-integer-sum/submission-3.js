class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums){
        let sorted = nums.sort((a,b) => a - b);
        let res = [];
        let n = nums.length;

        for (let i = 0; i< n; i++){
            if(sorted[i] > 0) break; //nếu phần tử đầu tiên của mảng đã sort mà lớn hơn ko thì thôi
            if(i > 0 && sorted[i] === sorted[i-1]) continue; // nếu phần tử đang xét bằng phần tử đã xét thì thôi

            let l = i + 1, r = n - 1;
            while (l < r){
                let sum = sorted[i] + sorted[l] + sorted[r];
                if (sum < 0){
                    l++;
                } else if (sum > 0) {
                    r--;
                } else {
                    res.push([sorted[i],sorted[l], sorted[r]])
                    l++;
                    r--;
                    while(sorted[l] == sorted[l-1] && l < r){
                        l++;
                    }
                }
            }
        }
        return res;
    }
    // threeSum(nums) {
    //     let sorted = nums.sort((a,b) => a-b);
    //     let sum2 = sorted.map((i) => (0-i)); //tạo array chứa phần bù của từng phần tử vị trí tương ứng
    //     let res = [];
    //     for (let i = 0; i < nums.length; i++){
    //         let s = sum2[i];   //tổng mà 2 số trong lần lặp này phải bằng
    //         let temp = [...nums];
    //         temp.splice(i,1); // mảng xét bỏ đi phần tử tạo thành phần bù
    //         let diff = new Map();
    //         for (let j = 0; j < temp.length; j++){ // diff: là map chứa phần bù của 2 số tạo thành s
    //             let value = s - temp[j];
    //             diff.set(value, j);
    //         }   
    //         for (let j = 0; j < temp.length; j++){ //vòng lặp nếu diff chứa phần tử tại i và phần tử đó không trùng với vị trí của diff đang xét
    //             if(diff.has(temp[j]) && j != diff.get(temp[j])){
    //                 let temp2 = [];
    //                 temp2.push(sorted[i]);
    //                 temp2.push(temp[diff.get(temp[j])]);
    //                 temp2.push(temp[j]);
    //                 temp2.sort();
    //                 console.log(temp2);
    //                 res.push(temp2);
    //             }
    //         }
    //     }
    //     let check = new Set();
    //     let trueRes = [];
    //     for (let st of res){
    //         let st_ = st.join(",");
    //         if(!check.has(st_)){
    //             check.add(st_);
    //             trueRes.push(st)
    //         }
    //     }
    //     return trueRes;
    // }
}
