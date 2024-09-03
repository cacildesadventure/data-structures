/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let firstIdx, secondIdx;
  let found;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i == j) {
        continue;
      }

      if (nums[i] + nums[j] == target) {
        firstIdx = i;
        secondIdx = j;
        found = true;
        break;
      }
    }

    if (found) {
      break;
    }
  }

  return [firstIdx, secondIdx];
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
