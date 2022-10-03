/** Container with Most Water **
 * 
 * Given an array 'heights' which represents the heights of blocks
 * on a container, find the maximum area of water that can be stored
 * within these blocks. 
 * 
 * @example
 * maxWater([1, 5, 4, 3]) -> 6
 * maxWater([1, 5, 6, 3, 4, 2]) -> 12
 * maxWater([4, 3, 2, 1, 4]) -> 16
 * 
 */

// Optimal Solution

 const maxWater = (heights) => {
   let left = 0 
   let right = heights.length - 1
   let maxArea = 0

   while(left < right){
      let width = right - left
      let height = Math.min(heights[left], heights[right])
      let area = width * height
      if(heights[left] < heights[right]){
         left += 1
      }
      else{
         right -= 1
      }
      if(area > maxArea){
         maxArea = area
      }
   }
   return maxArea
}

module.exports = maxWater;