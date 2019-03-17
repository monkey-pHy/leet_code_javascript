var sortedSquares = function(A) {
    var Asort = [];
    for(var i=0; i<A.length; i++){
        Asort.push(Math.pow(A[i],2));
    }
    Asort.sort((a,b)=>{
        if(a>b){
            return 1;
        }else if(a<b) {
            return -1;
        }else{ return 0;
        }
    });
    return Asort;

};
var array = [-4,-1,0,3,10]
console.log(sortedSquares(array));