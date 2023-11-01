/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

var multiply = function(num1, num2) {
    const dp = [ ...Array(num1.length + num2.length) ].fill(0)
    
    for(let i = num1.length - 1; i >= 0; i--) {

      for(let j = num2.length - 1; j >= 0; j--) {
        const product = num1[i] * num2[j] + dp[i + j + 1] 

        dp[i + j + 1] = product % 10
		dp[i + j] += Math.floor(product / 10)
       }

    }
    
    let idx = 0
    while(dp[idx] === 0) dp.shift()
    if(!dp.length) return "0"
    return dp.join("") 
}
