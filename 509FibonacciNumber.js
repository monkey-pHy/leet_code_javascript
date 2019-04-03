var fib = function(N) {
    if(N===0 || N===1) {
        return N;
    }
    let sequence =[0,1];
    for(var i=2;i<N;i++){
        sequence.push(sequence[i-1]+sequence[i-2]);
    }
    return sequence[N-1]+sequence[N-2];
};
var N = 4;
console.log(fib(N));