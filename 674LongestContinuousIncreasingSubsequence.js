/** 
 * 题目: Shortest Unsorted Continuous Subarray
 * 具体：Given an unsorted array of integers, find the length of longest continuous increasing subsequence (subarray).
 * 理解：找出最长的有序子数组
*/

var findLengthOfLCIS = function(nums) {
    let precount =1;
    let nowcount =1;
    if(nums.length==0) return 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]<nums[i+1]){
            ++nowcount;
        }else{
            precount = Math.max(precount,nowcount);
            nowcount = 1;
        }
    }
    return nowcount>precount?nowcount:precount;
};
var array = [1,3,5,4,7];
console.log(findLengthOfLCIS(array));