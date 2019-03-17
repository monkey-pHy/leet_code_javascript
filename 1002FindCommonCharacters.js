var commonChars = function(A) {
    let res = A[0].split('');
    let temp = [];
    for(let i = 1, size = A.length; i < size; i++) {
        for(let j = 0, sizeJ = A[i].length; j < sizeJ; j++) {
            const letter = A[i][j];
            const tempIndex = res.indexOf(letter);
            if(tempIndex > -1) {
                temp.push(letter);
                res.splice(tempIndex, 1);
            }
        }
        res = temp;
        temp = [];
    }
    
    return res;
};
var array = ["bella","label","roller"];
console.log(commonChars(array));
