/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  if (nums.length < 3) return result;
  if (nums[0] > 0) return result;
  
  for (let i = 0; i < nums.length - 2; i += 1) {
    if (nums[i] === nums[i - 1]) continue;
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        result.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1]) j += 1;
        while (nums[k] === nums[k - 1]) k -= 1;
        j += 1;
        k -= 1;
      } else if (sum < 0) {
        j += 1;
      } else {
        k -= 1;
      }
    }
  }
  
  return result;
};