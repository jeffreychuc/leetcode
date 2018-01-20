
// https://leetcode.com/problems/two-sum/description/

var twoSum = function(nums, target) {
  let res = {};
  for (let i = 0; i < nums.length; i++)   {
    if (res[nums[i]])   {
      return [res[nums[i]], i];
    }
    res[target - nums[i]] = i;
  }
};
