/**
 * @param {number[][]} accounts
 * @return {number}
 */

var maximumWealth = function(accounts) {
    let sum = []

    accounts.forEach(account => {
        x = 0
        account.forEach(i => x += i)
        sum.push(x)
    })

    return sum.sort((a, b) => a - b).reverse()[0]
}
