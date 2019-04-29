var repeatedStringMatch = function(A, B) {
    let i = 0;
    let str = '';
    do {
         str = A.repeat(++i);
        if (str.indexOf(B) !== -1){
            return i;
        }
    }
    while (str.length <= B.length);
    if (A.repeat(++i).indexOf(B) !== -1){
        return i;
    }
    return -1;
};
var A = "abc",B = "cabcabca";
console.log(repeatedStringMatch(A,B))
