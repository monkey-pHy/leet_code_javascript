var containsNearbyDuplicate = function(nums, k) {
    for(var i=0;i<nums.length;i++){
        var pos =nums.indexOf(nums[i],i+1);
        if(pos==-1){
            continue;
        }else if(pos<=i+k){
            return true;
        }
    }

    return false;
    var hash={}
    for( var i=0;i<nums.length;i++) {

        if(hash[nums[i]]==undefined){
            hash[nums[i]]=i
        }else if(i-hash[nums[i]]>k){
            hash[nums[i]]=i
        }else{
            return true;
        }
            
    }
return false;
};
var array = [1,2,3,1];
console.log(containsNearbyDuplicate(array));