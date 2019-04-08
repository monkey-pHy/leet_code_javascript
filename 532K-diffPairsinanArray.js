var findPairs = function(nums, k) {
    nums.sort((a,b) => (a - b))
    let result = 0
    for(let i = 0; i < nums.length; i++){
        if(i > 0 && nums[i] === nums[i - 1])
            continue
        for(let j = i + 1; j < nums.length; j++){
            let diff = nums[j] - nums[i]
            if(diff === k){
                result += 1
                break
            }
            if(diff > k) break
        }
    }
    return result；
};
var array= [3, 1, 4, 1, 5];
console.log(findPairs(array,2));