/** Product of Array except Self:
 *
 * Write a function that takes in an array of integers 'nums' and
 * returns an array with the product of all integers except the current integer.
 * 
 * Note: You can not use the division operator 
 * 
 * Follow up: Can you do this in constant space? The results array does NOT count to the space.
 *
 * @examples
 * productExceptSelf([1, 2, 3, 4]) -> [24, 12, 8, 6]
 * productExceptSelf([3, 2, 6, 1]) -> [12, 18, 6, 36]
 * productExceptSelf([10, 1, 5, 2]) -> [10, 100, 20, 50]
 */

// Brute Force

// const productExceptSelf = (nums) => {
//     const leftProducts = []
//     const rightProducts = []
//     const results = []

//     leftProducts[0] = 1
//     rightProducts = [nums.length - 1]

//     for ( let i = 1; i < nums.length; ++i){
//         leftProducts[i] = nums[i - 1] * leftProducts[i - 1]
//     }
//     for ( let i = nums.length - 2; i >= 0; --i){
//         rightProducts[i] = nums[i + 1] * rightProducts[i + 1]
//     }
//     for (let i = 0; i < nums.length; ++i){
//         results[i] = leftProducts[i] * rightProducts[i]
//     }
//     return results
// };

// Optimal Solution (constant space)

const productExceptSelf = (nums) => {
    const results = []
    results[0] = 1
    let rightProduct = 1

    for ( let i = 1; i < nums.length; ++i){
        results[i] = nums[i - 1] * results[i - 1]
    }
    for ( let i = nums.length - 2; i >= 0; --i){
        results[i] = rightProduct * results[i + 1]
        rightProduct = rightProduct * nums[i]
    }
    return results
};

module.exports = productExceptSelf;
