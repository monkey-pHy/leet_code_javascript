var matrixReshape = function(nums, r, c) {
    var count = nums[0].length * nums.length;
    if(count!=r*c) return nums;
    let source = [];
    const target = [];
    nums.forEach(p=>source = source.concat(p));
    for(let i=0;i<r;i++){
        target[i] =[];
        for(let j=0;j<c;j++){
            target.push(source[i*c+j]);
        }
    }
    return target;
};
var array= [[1,2],[3,4]];
console.log(matrixReshape(array,1,4));