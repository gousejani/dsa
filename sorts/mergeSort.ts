export function mergeSort(nums: Array<number>): Array<number> {
  if (nums.length <= 1) return nums;

  let mid = Math.floor(nums.length / 2);
  let arr1 = mergeSort(nums.slice(0, mid));
  let arr2 = mergeSort(nums.slice(mid));
  return merge(arr1, arr2);
}

function merge(arr1: Array<number>, arr2: Array<number>) {
  let i = 0;
  let j = 0;
  let out: Array<number> = [];

  while (i < arr1.length || j < arr2.length) {
    if (i >= arr1.length) {
      out = out.concat(arr2.slice(j));
      break;
    }

    if (j >= arr2.length) {
      out = out.concat(arr1.slice(i));
      break;
    }

    if (arr1[i] < arr2[j]) {
      out.push(arr1[i]);
      i++;
    } else {
      out.push(arr2[j]);
      j++;
    }
  }

  return out;
}
