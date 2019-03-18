var pivotIndex = function(nums) {
    if(nums === null || nums.length ==0) return -1;
    let sum = nums.reduce((pre,cur)=>pre+cur,0);//计算数组所有项之和
    let leftsum =0;
    for(let i=0;i<nums.length;i++){
        let rightsum = sum -nums[i]-leftsum;
        if(rightsum == leftsum) return i;
        leftsum +=nums[i];
    }
    return -1;   
};
var array= [1, 0, 0];
console.log(pivotIndex(array));