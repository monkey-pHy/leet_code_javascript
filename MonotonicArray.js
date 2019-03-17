var isMonotonic = function(A) {
    var increase=true;
    var decrease=true;
    for(var i=0;i<A.length-1;i++){
        if(A[i]<A[i+1]){
            increase=false;
            break;
        }
    }
      for(var i=0;i<A.length-1;i++){
        if(A[i]>A[i+1]){
            decrease=false;
            break;
        }
    }
    return increase||decrease;
};
var array =[1,3,2];
console.log(isMonotonic(array));