/** Contains Duplicate **
 * 
 * Given an array of integers, return true if any integer appears
 * at least twice in the array, otherwise return false.
 * 
 * @example
 * containsDuplicate([1, 2, 3, 4]) -> false
 * containsDuplicate([1, 2, 2, 5]) -> true
 * containsDuplicate([1, 2, 9, 5, 9]) -> true
 * 
 */

// Brute Force Method
// -- time complexity o(n^2)
// -- space complexity linear o(1)

// const containsDuplicate = (nums) => {
//     for ( let i = 0; i < nums.length - 1; ++i){
//         for (let j = i + 1; j < nums.length; ++j){
//             if(nums[i] === nums[j]){
//                 return true
//             }
//         }
//     }
//     return false
// }

// Sorting Method
// -- time complexity is faster o(nlog(n))
// -- space complexity linear o(n) space

// const containsDuplicate = (nums) => {
//     const sortedArr = nums.sort((a, b) => a - b)
//     for (let i = 0; i < sortedArr.length -1; ++i){
//         if (sortedArr[i] === sortedArr[i + 1])
//         return true
//     }
//     return false
// }

// Optimal Solution (can use map too just change word)
// -- time and space complexity both linear 

const containsDuplicate = (nums) => {
    const set = new Set()
    for (let i = 0; i < nums.length; ++i){
        if (set.has(nums[i])){
            return true
        }
        set.add(nums[i])
    }
    return false
}


module.exports = containsDuplicate;
