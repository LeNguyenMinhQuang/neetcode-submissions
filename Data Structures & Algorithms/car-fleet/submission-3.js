class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let car = [];
        let stack = [];
        position.forEach((pos,i) => car.push([pos, speed[i]]));
        car.sort(([a1,b1],[a2,b2]) => a2 - a1);
        for (let [p,s] of car){
            let time = (target-p)/s;
            if (stack.length === 0) {
                stack.push(time);
            } else {
                let prev_time = stack[stack.length - 1];
                if (time > prev_time) stack.push(time);
            }
        }
        return stack.length;
    }
}
