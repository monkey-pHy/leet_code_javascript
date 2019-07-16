var twoSum = function(nums, target) {
    const  map = {};
    for(let i=0;i<nums.length;i++){
        const another = target - nums[i];
        if(another in map) {
            return [map[another],i];
        }
        map[nums[i]] = i;
    }
    return null;
};
var array1 = [2, 7, 11, 15];
console.log(twoSum(array1,9));