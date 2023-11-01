/**
 * @param {number[]} arr
 * @return {boolean}
 */

var canMakeArithmeticProgression = function(arr) {
    arr = arr.sort((a,b) => a - b)
    let difference = []
    let answer = 1

    for (let i = 0; i < arr.length - 1; i++) {
        difference.push(arr[i + 1] - arr[i])
    }

    if (difference.length == 1) { return true }
    else {
        for (let i = 0; i < difference.length - 1; i++) {
            if (difference[i] != difference[i + 1]) { answer = answer * 0 }
            else { answer = answer * 1 }
        }

        if (answer == 1) { return true }
        else { return false }
    }
}
