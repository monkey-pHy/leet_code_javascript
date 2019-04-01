/** 
 * 题目: Partition Array Into Three Parts With Equal Sum
 * 具体：Given an array A of integers, return true if and only if we can partition the array into three non-empty parts with equal sums.
 * 理解：分割数组为三段，三段子数组的和相等，返回true，如果不能分割成和相等的三段子数组，则返回false
*/
var canThreePartsEqualSum = function(A) {
    let sum=0;
    for(const a of A) sum+=a;
    if(sum%3!==0) return false;
    let t = parseInt(sum/3);
    let cur=0;
    let count =0;
    for(const a of A){
        cur+=a;
        if(cur==t){
            count++;
            cur =0;
        }
        if(count>3) return false;
    }
    return count ===3;
};
var array = [0,2,1,-6,6,-7,9,1,2,0,1];
console.log(canThreePartsEqualSum(array));