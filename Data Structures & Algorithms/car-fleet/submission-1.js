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
        let n = position.length;
        for (let i = 0; i < n; i++){
            car.push([position[i], speed[i]]);
        }
        car.sort(([a1,b1],[a2,b2]) => (a2-a1));
        for (let [a,b] of car){
            let time = (target-a)/b;
            if (stack.length == 0) {
                stack.push(time);
            } else if (stack.length > 0) {
                let prev_time = stack[stack.length-1];
                if (prev_time < time){
                    stack.push(time);
                }
            }
            
        }
        return stack.length
    }
}
