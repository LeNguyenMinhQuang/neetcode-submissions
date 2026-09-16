class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const n = position.length;
    if (n === 0) return 0;

    // Tạo mảng chỉ số [0, 1, ..., n-1]
    const indices = new Array(n);
    for (let i = 0; i < n; i++) indices[i] = i;

    // Sắp xếp chỉ số dựa theo vị trí position giảm dần (không destructuring)
    indices.sort((a, b) => position[b] - position[a]);

    let fleets = 0;
    let maxTime = 0;

    // Duyệt theo chỉ số đã sắp xếp
    for (let i = 0; i < n; i++) {
        const idx = indices[i];
        const time = (target - position[idx]) / speed[idx];

        // Nếu thời gian xe này > xe dẫn đầu đoàn trước -> tạo đoàn xe mới
        if (time > maxTime) {
            fleets++;
            maxTime = time;
        }
    }

    return fleets;
    }
}
