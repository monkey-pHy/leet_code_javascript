var findMaxAverage = function(nums, k) {
    if(nums.length == 1) return nums[0];
    var sum = 0;
    for (var i = 0; i < k; i++) {
        sum += nums[i];
    }
    
    var max = sum;
    for (var i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k];
        
        if (sum > max) {
            max = sum;
        }
    }
    
    return max / k;
};
var array= [1,12,-5,-6,50,3];
console.log(findMaxAverage(array,4));