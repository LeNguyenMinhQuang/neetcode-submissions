class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let stack = [], car = [];
        for (let i = 0; i < position.length; i++){
            car.push([position[i], speed[i]]);
        }
        car.sort(([a,b],[c,d])=> c-a);
        for (let [p,s] of car){
            let time = (target-p)/s;
            if (stack.length === 0){
                stack.push(time);
            } else {
                if (time > stack[stack.length - 1]){
                    stack.push(time);
                }
            }
        }
        return stack.length;
    }
}
