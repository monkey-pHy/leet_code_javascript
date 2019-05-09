var countBinarySubstrings = function(s) {
    var prevRunlength = 0;
    var curRunLength = 1;
    var res = 0;
    for(let i =1; i<s.length;i++){
        if(s.charAt(i)== s.charAt(i-1)) curRunLength++;
        else {
            prevRunlength = curRunLength;
            curRunLength = 1;
        }
        if(prevRunlength>=curRunLength) res++;
    }
    return res;

};
var s = "00110011";
console.log(countBinarySubstrings(s));