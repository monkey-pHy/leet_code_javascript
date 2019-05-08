var repeatedSubstringPattern = function(s) {
    const str = s + s;
    return str.slice(1,str.length-1).includes(s);
};
var s = "abab";
console.log(repeatedSubstringPattern(s)) 