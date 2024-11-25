export function selectionSort(nums: Array<number>): Array<number> {
  for (let i = 0; i < nums.length - 1; i++) {
    let min = nums[i];
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < min) {
        minIndex = j;
        min = nums[j];
      }
    }

    if (minIndex != i) {
      swap(nums, minIndex, i);
    }
  }
  return nums;
}

function swap(nums: Array<number>, i: number, j: number) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
