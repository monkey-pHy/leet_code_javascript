var validMountainArray = function(A) {
    if(A.length<3) return false;

    var start = A[0];
    var index =1;
    var increase =0;
    var decrease =0;
    
    while(start<A[index]){
        start = A[index];
        index++
        increase++;
    }

    while(start>A[index]){
        start = A[index];
        index++;
        decrease++;
    }

    return index === A.length && increase >0 && decrease >0;
};
var array= [1,2,3,1];
console.log(validMountainArray(array));