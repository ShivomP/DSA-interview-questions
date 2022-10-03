/** Stock Trading
 * 
 * Given an array of 'prices', find the transaction that will yield the greatest profits.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing 
 * a different day in the future to sell that stock.
 * 
 * @examples
 * stocks([8, 3, 6, 1, 6, 4, 7]) -> 6
 * stocks([1, 8, 3, 4]) -> 7
 * stocks([2, 9, 18, 9, 2]) ->  16
 */

// For Loop Method

// const stocks = (prices) => {
//    let left = prices[0]
//    let maxProfit = 0
//    for ( let right = 1; right < prices.length; ++right){
//     const profit = prices[right] - prices[left]
//     if (profit > 0){
//         maxProfit = Math.max(maxProfit, profit)
//     }
//     else{
//         left = right
//     }
//    }
//    return maxProfit
// }

// While Loop

const stocks = (prices) => {
    let left = prices[0]
    let right = 1
    let maxProfit = 0
    while (right < prices.length) {
     const profit = prices[right] - prices[left]
     if (profit > 0){
        maxProfit = Math.max(maxProfit, profit)
     }
     else{
         left = right
     }
     ++right
    }
    return maxProfit
}


//DO NOT EDIT BELOW THIS LINE
module.exports = stocks;
