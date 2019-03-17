var rotate = function(nums, k) {
    k %= nums.length;
    var tmp = [];
    if (k) tmp = nums.slice(-k);//相当于从数组的nums.length+(-k)位置取值；
    nums.splice(-k,k);
  
    Array.prototype.unshift.apply(nums,tmp);
    return nums;
};
var array= [1,2,3,4,5,6,7];
console.log(rotate(array,3));