class Solution:
    def maxArea(self, heights: List[int]) -> int:
        l = 0
        r = len(heights) - 1
        m = 0
        while l < r:
            if heights[l] <= heights[r]:
                temp = (r-l) * heights[l]
                m = max(m, temp)
                l += 1
            if heights[l] > heights[r]:
                temp = (r-l) * heights[r]
                m = max(m, temp)
                r -= 1
        return m
        