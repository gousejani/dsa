export function quickSort(nums: Array<number>): Array<number> {
  qs(nums, 0, nums.length - 1);
  return nums;
}

function qs(nums: Array<number>, low: number, high: number) {
  if (low >= high) {
    return;
  }

  let idx = partition(nums, low, high);
  qs(nums, low, idx - 1);
  qs(nums, idx + 1, high);
}
function swap(nums: Array<number>, i: number, j: number) {
  let temp = nums[j];
  nums[j] = nums[i];
  nums[i] = temp;
}

function partition(nums: Array<number>, low: number, high: number) {
  let pivot = nums[high];

  let idx = low - 1;
  let i = low;

  while (i < high) {
    if (nums[i] <= pivot) {
      idx++;
      swap(nums, idx, i);
    }
    i++;
  }

  idx++;
  swap(nums, idx, high);

  return idx;
}

console.log(quickSort([7, 5, 1, 6, 3, 1, 2, 3, 7, 8, 4]));
