/**
 * 题目: Largest Number At Least Twice of Others
 * 具体：In a given integer array nums, there is always exactly one largest element.
 * 理解：找到最大的元素，并且这个元素是其他元素的至少两倍多，返回它的index值，没有返回-1
 */

var dominantIndex = function (nums) {
    let maxNumber = Math.max.apply(null, nums);
    let preMax = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > preMax && nums[i] != maxNumber) {
            preMax = nums[i];
        }
    }
    if (maxNumber >= (preMax * 2)) return nums.findIndex(k => k == maxNumber); //findIndex(回调函数（当前值，当前位置，原数组)，this）找出第一个符合条件的数组成员返回，如果没有则返回-1
    else return -1;
};
var array = [3, 6, 1, 0];
console.log(dominantIndex(array));