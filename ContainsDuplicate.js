var containsDuplicate = function(nums) {
    var flag = false;
    if(nums.length){
        nums.sort();
        for(var i=0; i<nums.length; i++){
            // for(var j=i+1;j<nums.length;j++){
                if(nums[i]===nums[i+1]){
                    flag=true;
                    break;
                }
            // }

        }
        return flag;    
    }else{
        return false;
    }

    
};

var array = [2,14,18,22,22];

var p =containsDuplicate(array);
console.log(p);