var removeDuplicates = function(nums) {
    for(var i=0;i<nums.length;i++){
        if(nums[i]==nums[i+1]){
            nums.splice(i,1);
            i--;
        }
    }
    return nums.length;
    
};
var array = [0,0,1,1,1,2,2,3,3,4];
var p = removeDuplicates(array);
console.log(p);