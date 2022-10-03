/** Maximum Subarray
  *  
  * Given an integer array `nums`, find the subarray which has the 
  * largest sum and return the sum. 
  * 
  * @examples
  * maxSubArray([5, 4, -1, 7, 8]) = 23
  * maxSubArray([-2, 1, -3, 4, -1, 2, -5, 0]) = 5
  * maxSubArray([2, 4, 3, -1, -4, -9]) = 9
  */

// Brute Force
// -- time complexity o(n^3) very slow
// -- space complexity o(n)

// const maxSubArray = (nums) => {
//   let maxSum = nums[0]
//   for ( let i = 0; i < nums.length; ++i){
//     for ( let j = i; j <= nums.length; ++j){
//       const subarray = (nums.slice(i, j))
//       const sum = subarray.reduce((acc, curr) => acc + curr)
//       maxSum = Math.max(maxSum, sum)
//       }
//     }
//     return maxSum
//  }

// Faster Solution
// -- time complexity o(n^2)

// const maxSubArray = (nums) => {
//   for (let i = 0; i < nums.length; ++i){
//     for (let j = i; j < nums.length; ++j){
//       sum += nums[j]
//       maxSum = Math.max(maxSum, sum)
//     }
//   }
//   return maxSum
// }

// Optimal Solution
// -- time complexity o(n)
// -- space complexity o(1)

const maxSubArray = (nums) => {
  const maxSum = nums[0]
  const sum = 0
  for (let i = 0; i < nums.length; ++ i){
    if (sum < 0){
      sum = 0
    }
    sum += nums[i]
    maxSum = Math.max(maxSum, sum)
  }
  return maxSum
}


//DO NOT EDIT BELOW THIS LINE
module.exports = maxSubArray;
