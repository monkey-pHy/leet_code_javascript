var moveZeroes = function(nums) {
    var countZero =0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===0){
            nums.splice(i,1);
            countZero++;
            i--;
        }
    }
    for(let i=0;i<countZero;i++){
        nums.push(0);
    }
    return nums;
};
var array = [0,1,0,3,12];
console.log(moveZeroes(array));