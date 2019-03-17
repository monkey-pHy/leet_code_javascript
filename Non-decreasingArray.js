var checkPossibility = function(nums) {
    var count = 0;
    for (var i = 0; i < nums.length-1 && count <= 1; i++){
        if (nums[i] > nums[i+1]){
            count++;
            if (i-1 < 0 || nums[i-1] <= nums[i+1]) nums[i] = nums[i+1];
            else nums[i+1] = nums[i];
        }
    }
    return count <=1;
};
var array = [4,2,1];

var p =checkPossibility(array);
console.log(p);