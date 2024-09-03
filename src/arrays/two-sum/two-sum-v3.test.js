var twoSum = function (nums, target) {
  const dictionary = {};

  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];

    if (dictionary.hasOwnProperty(difference)) {
      return [dictionary[difference], i];
    }

    dictionary[nums[i]] = i;
  }

  return [];
};

twoSum([3, 2, 3], 6);

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
