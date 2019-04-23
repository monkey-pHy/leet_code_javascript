var reverseStr = function(s, k) {
     var str1 = s.slice(0,k).split('').reverse().join('');
     s=str1+s.slice(k);
     return s;
};
var s = "abcdefg";
console.log(reverseStr(s,2))