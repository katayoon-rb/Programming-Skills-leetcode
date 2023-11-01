/**
 * @param {number[]} salary
 * @return {number}
 */

var average = function(salary) {
    salary = salary.sort((a, b) => a - b)
    salary.shift()
    salary.pop()

    let sum = 0
    salary.forEach(s => sum += s)
    let average = sum / salary.length

    return average
}
