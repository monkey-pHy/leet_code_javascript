var searchInsert = function (nums, target) {
    if(nums.indexOf(target)!=-1){
        return nums.indexOf(target);
        }else{
            for(var i=0; i<nums.length;i++){
                if(target<nums[i]){
                    return i;
                    break;
                }
            }
            return nums.length;
        }
};
var array = [1, 3, 5, 6]
var result = searchInsert(array, 7);
console.log(result);