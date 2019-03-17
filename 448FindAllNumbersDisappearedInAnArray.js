var findDisappearedNumbers = function(nums) {
    var retList = [];
    for (var i = 1; i <= nums.length; i++) {
        if (nums.includes(i) === false) {
            retList.push(i);
        }
    }
    return retList;    
};
var array =[4,3,2,7,8,2,3,1];