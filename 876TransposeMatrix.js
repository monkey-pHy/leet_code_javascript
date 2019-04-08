var transpose = function(A) {
    return A[0].reduce((acc,a,i)=>acc.contact([A.map((b, j) => A[j][i])]), []);
};
var array= [[1,2,3],[4,5,6],[7,8,9]];
console.log(transpose(array));