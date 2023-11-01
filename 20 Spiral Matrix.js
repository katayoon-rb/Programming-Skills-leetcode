2/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var spiralOrder = function(matrix) {
    let ans = []
    let R = matrix.length,
        C = matrix[0].length

    let l = 0,
        r = C - 1
    let t = 0,
        b = R - 1


  while (l <= r && t <= b) {
    for (let i = l; i <= r; i++) { ans.push(matrix[t][i]) }
    t++

    for (let i = t; i <= b; i++) { ans.push(matrix[i][r]) }
    r--

    for (let i = r; i >= l && t <= b; i--) { ans.push(matrix[b][i]) }
    b--
 
    for (let i = b; i >= t && l <= r; i--) { ans.push(matrix[i][l]) }
    l++
  }

  return ans
}
