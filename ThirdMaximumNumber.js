var thirdMax = function (nums) {
    if (nums.length == 0) return 0;
    var max = -Infinity;
    var second = -Infinity;
    var third = -Infinity;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            third=second;
            second=max;
            max=nums[i];
            }else if(nums[i]>second && nums[i]!= max){
                third=second;
                second=nums[i];
            }else if(nums[i]>third && nums[i]!=second && nums[i]!=max){
                third=nums[i];
            }

        }

        return third === -Infinity?max:third;

};
var array = [1,2,-2147483648];
console.log(thirdMax(array));