var twoSum = function (nums, target) {
  if (nums.length <= 0) {
    return undefined;
  }

  for (let secondNumber = nums.length - 2; secondNumber >= 0; secondNumber--) {
    if (nums[nums.length - 1] + nums[secondNumber] == target) {
      return [nums.length - 1, secondNumber].reverse();
    }
  }

  return twoSum(nums.splice(0, nums.length - 1), target);
};

test("case 1", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test("case 2", () => {
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});

test("case 3", () => {
  expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});

test("case 4", () => {
  expect(twoSum([3, 2, 3], 6)).toEqual([0, 2]);
});
