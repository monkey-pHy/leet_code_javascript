var prefixesDivBy5 = function(A) {
    let arr =[];
    let num = 0;
    for(const d of A){
        num =(num*2+d)%5;
        arr.push(!num);
    }
    return arr;
};
var array= [0,1,1,1,1,1];
console.log(prefixesDivBy5(array));