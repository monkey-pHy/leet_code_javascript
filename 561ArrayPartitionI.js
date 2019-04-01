var arrayPairSum = function(nums) {
    return nums.sort((a,b)=>a-b).filter((item,index)=>index%2==0).reduce((a,b)=>a+b);
};
var array= [1,4,3,2];
console.log(arrayPairSum(array,1,4));

