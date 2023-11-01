1/**
 * @param {string} moves
 * @return {boolean}
 */
 
var judgeCircle = function(moves) {
    let originLR = 0
    let originUD = 0
    moves = moves.split('')

    for (let i = 0; i < moves.length; i++) {
        if (moves[i] == 'U') { originUD++ }
        if (moves[i] == 'D') { originUD-- }
        if (moves[i] == 'L') { originLR++ }
        if (moves[i] == 'R') { originLR-- }
    }

    if (originLR == 0 && originUD == 0) { return true }
    else { return false }
}
