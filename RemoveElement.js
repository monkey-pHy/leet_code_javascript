var removeElement = function (nums, val) {
    for(var i=0; i<nums.length;i++){
        if(nums[i]==val){
            nums.splice(i,1);
            i--;
        }
    }
    return nums;

};

var array = [0,1,2,2,3,0,4,2];
var p = removeElement(array, 2);
console.log(p);