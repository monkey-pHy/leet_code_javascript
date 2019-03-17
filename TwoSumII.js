var twoSum = function(numbers, target) {
    var result =[];
    for(var i=0;i<numbers.length;i++){
        for(var j=i+1;j<numbers.length;j++){
            if(numbers[i]+numbers[j]==target){
                result [0] =i+1;
                result [1] = j+1;  
            }
        }
    }
    return result;
}; 
var array = [2,7,11,15];
console.log(twoSum(array,9));