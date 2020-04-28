const twoSum = function (nums, target) {
    if (!Array.isArray(nums) || nums.length < 2) return;
    let map = new Map();
    map.set(nums[0], 0);
    for (let i = 1; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        } else {
            map.set(nums[i], i);
        }
    }

    return '未找到';
}

const merge = function (nums1, nums2) {
    let m = nums1.length, n = nums2.length, i = m - 1, j = n - 1;
    let k = m + n - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
            k--;
        } else if (nums1[i] < nums2[j]) {
            nums1[k] = nums2[j];
            j--;
            k--;
        } else {
            nums1[k] = nums1[i]; k--; i--;
            nums1[k] = nums2[j]; k--; j--;
        }
    }

    while (j >= 0) {
        nums1[k] = nums2[j];
        k--; j--;
    }

    return nums1;
}

// console.log(twoSum([1, 2, 6, 7, 5, 4], 9));
console.log(merge([0, 1, 1, 2, 3, 6, 8, 9], [2, 4, 5, 6]))