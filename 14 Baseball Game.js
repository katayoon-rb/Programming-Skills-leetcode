/**
 * @param {string[]} operations
 * @return {number}
 */

var calPoints = function(operations) {
    let score = []
    let sum = 0
    
    for (let i = 0; i < operations.length; i++) {
        if (parseInt(operations[i])){
            score.push(parseInt(operations[i]))
        }
        else if (operations[i] == "C") {
            score.pop()
        }
        else if (operations[i] == "D") {
            score.push(score[score.length - 1] * 2)
        }
        else if (operations[i] == "+") {
            score.push(score[score.length - 1] + score[score.length - 2])
        }   
    }

    for (let j = 0; j < score.length; j++) {
        sum += score[j]
    }
    return sum
}
