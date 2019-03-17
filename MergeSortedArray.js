var merge = function (nums1, m, nums2, n) {
    nums1.splice(m);
    nums2.splice(n);
    nums1.push(...nums2);
    nums1.sort((a,b)=> a-b);
    return nums1;
};
var array1 = [1, 2, 3, 0, 0, 0];
var array2 = [2, 5, 6];
var result = merge(array1, 3, array2, 3);
console.log(result);