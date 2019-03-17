var maxSubArray = function(nums) {
    if(nums.length == 0) return 0;
    var maxSum = nums[0];
    var curSum =nums[0];
    for(var i=1; i<nums.length; i++){
        if(nums[i]>curSum+nums[i]){
            curSum = nums[i];
        }else {
            curSum +=nums[i];
        }
        if(curSum>maxSum){
            maxSum = curSum;
        }
    }
    
    return maxSum;
};

var array = [-2,1,-3,4,-1,2,1,-5,4];

var p =maxSubArray(array);
console.log(p);