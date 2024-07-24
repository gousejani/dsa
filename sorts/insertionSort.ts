export function insertionSort(nums: Array<number>): Array<number> {
  for (let i = 1; i < nums.length; i++) {
    let j = i;
    while (j > 0 && nums[j] < nums[j - 1]) {
      swap(j, j - 1);
      j--;
    }
  }

  return nums;

  function swap(i: number, j: number) {
    let temp = nums[j];
    nums[j] = nums[i];
    nums[i] = temp;
  }
}
