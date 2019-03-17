var sortArrayByParity = function(A) {
    for(var i=0; i<A.length;i++){
        if(A[i]%2==0){
            var p = A.splice(i,1);
            A.unshift(p);
        }
    }
    return A
};
var array =[3,1,2,4];
console.log(sortArrayByParity(array));