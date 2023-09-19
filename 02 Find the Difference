/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

var findTheDifference = function(s, t) {
  t = t.split('')
  t.sort()

  s = s.split('')
  s.sort()

  let difference = ''
  for (let i = 0; i < t.length; i++){
    if (t[i] != s[i]) {
      difference += t[i]
    }
  }
  
  return difference[0][0]
};
