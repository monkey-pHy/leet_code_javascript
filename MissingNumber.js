var missingNumber = function(nums) {

    var sum1 =0;
    var sum2 =0;
    for(var i=0; i<nums.length;i++){
        sum1 +=i;
        sum2 +=nums[i];
    }
    if(sum1 == sum2){
        return nums.length;
    }else{
        return nums.length-(sum2-sum1);
    }
};
var array = [0];

var p =missingNumber(array);
console.log(p);