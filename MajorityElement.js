var majorityElement = function (nums) {
    var major = '';
    var count = 0;
    var length = nums.length;
    for(var i=0; i<length; i++) {
        if (count === 0) {
            major = nums[i];
            count =1;
        } else if(nums[i] === major) {
            count++;
        } else {
            count--;
        }
    }
    return major;
};
var array = [3, 2, 3];
console.log(majorityElement(array))