var sortArrayByParityII = function(A) {
    var cur = [];
    var o =0;
    var e =1; 
    
    for(var i=0; i<A.length;i++){
        if(A[i]%2==0){
            cur[o]= A[i];
            o+=2;
        }else{
            cur[e] =A[i];
            e+=2;
        }
    }
    return cur;
};
var array=[4,5,2,7];
console.log(sortArrayByParityII(array))