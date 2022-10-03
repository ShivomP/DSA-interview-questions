/** Binary Search **
 * 
 * Given a sorted array 'nums' and an integer 'target', return
 * the index of the target. 
 * 
 * Note: Your solutions' time complexity must be faster than O(n). 
 * 
 * @example
 * binarySearch([1, 2, 4, 9, 12], 9) -> 3
 * binarySearch([-2, -1, 4, 5, 7], -1) -> 1
 * binarySearch([-1, 4, 18, 20], 18) -> 2
 * 
 */

// Brute Force 
// -- time complexity faster than o(n) becuase array halved each stage o(log(n))

const binarySearch = (nums, target) => {
    let left = 0
    let right = nums.length - 1
    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] > target){
            right = mid -1
        }
        else if (nums[mid] < target){
            left = mid + 1
        }
        else{
            return mid
        }
    }
}

module.exports = binarySearch;