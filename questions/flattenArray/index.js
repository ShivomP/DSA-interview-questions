/** Flatten Array **
 * 
 * Given an array 'nums' that can have nested arrays inside it,
 * flatten the array. (if there is a nested array return one array)
 *  
 * 
 * @example
 * flatten([1, 2, 3, [4, 5]]) -> [1, 2, 3, 4, 5]
 * flatten([1, 2, 3, [4, [5]]]) -> [1, 2, 3, 4, 5]
 * flatten([1, [2, 3, [4, [5]]]]) -> [1, 2, 3, 4, 5]
 * 
 */

// Optimal Solution

const flatten = (nums) => {
  const results = []

  const flattenHelper = (nums) => {
    for (elem of nums){
      if (Array.isArray(elem)){
        flattenHelper(elem)
      }
      else{
        results.push(elem)
      }
    }
  }
  flattenHelper(nums)
  return results
 };

module.exports = flatten; 