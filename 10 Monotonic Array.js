/**
 * @param {number[]} nums
 * @return {boolean}
 */

var isMonotonic = function(nums) {
  return (
    nums.every( (v, i) => i === 0 || v <= nums[i - 1] ) ||
    nums.every( (v, i) => i === 0 || v >= nums[i - 1] )
  ) 
}
