/** Three Sum
 *
 * Given an array of integers 'nums', return an array of all the
 * three numbers that add up to 0.
 *
 * Note: There cannot be any duplicate triplets in the results array.
 *
 * @examples
 * threeSum([-1, 0, 1, 2, -1, -4]) = [[-1, -1, 2], [-1, 0, 1]]
 * threeSum([-2, -2, 0, 0, 1, 1, 2, 2]) = [[ -2, 0, 2 ], [ -2, 1, 1 ]]
 * threeSum([0, 0, 0, 0]) = [[0, 0, 0]]
 */

// Optimal Solution

function threeSum(nums) {
  nums.sort((a, b) => a - b)
  const results = []

  for(i = 0; i < nums.length - 2; ++i){
        if (nums[i] === nums[i - 1]){
            continue
        }
        let left = i + 1
        let right = nums.length - 1
        while( left < right){
            const sum = nums[i] + nums[left] + nums[right]
            if(sum > 0){
                right--
            }
            if(sum < 0){
                left++
            }
            if(sum == 0){
                results.push([nums[i], nums[left], nums[right]])
                left++
                while (nums[left] === nums[left -1] && left < right){
                    left++
                }
            }
        }
    }
}

//DO NOT EDIT BELOW THIS LINE
module.exports = threeSum;
