var largeGroupPositions = function(S) {
    let res = [];
    let prev = 0;
    
    for (let i = 1; i < S.length; i++) {
        if (S[i] !== S[prev]) {
            if (i - prev > 2) {
                let pair = [prev, i - 1];
                res.push(pair);
            }
            prev = i;
        }
    }
    
    if (S.length - prev > 2) {
        res.push([prev, S.length - 1]);
    }
    
    return res;
};
var S = "abbxxxxzzy";
console.log(largeGroupPositions(S));