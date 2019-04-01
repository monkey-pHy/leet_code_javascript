/**
 * 题目: Shortest Unsorted Continuous Subarray
 * 具体：Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.
 * 理解：找连续子数组，如果对这个子数组进行生序排列或者降序排序，整个数组会随着子数组一样排列,找到的子数组必须是最短的，最后返回它的长度
 */
var findUnsortedSubarray = function(nums) {
    let copy = nums.slice()//slice()方法会创建一个新数组；
    copy.sort((a,b)=>a-b)//对copy进行升序排列；
    let start=nums.length-1; end =0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=copy[i]){
            start = Math.min(start,i);
            end = Math.max(end,i);
        }
    }
    if(end<=start) return 0;
    else return end-start+1;
    
};
var array = [2, 6, 4, 8, 10, 9, 15];
console.log(findUnsortedSubarray(array));