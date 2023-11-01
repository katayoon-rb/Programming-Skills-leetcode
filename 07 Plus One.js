/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function(digits) {
    let plused = BigInt(digits.join('')) + BigInt(1)
    let answer = String(plused).split('')

    return answer
}
