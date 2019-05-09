var reverseOnlyLetters = function(S) {
    if(S.match(/[a-zA-Z]/g)===null) return S;
    let arrLetters = S.match(/[a-zA-Z]/g).reverse();
    for(var i in S){
        if(!/[a-zA-Z]/.test(S[i])) {arrLetters.splice(i,0,S[i]);}
    }
    return arrLetters.join('');
};
var s = "ab-cd";
console.log(reverseOnlyLetters(s));