var reverseStr = function(s, k) {
     for(let i=0;i<s.length;i+=2*k){
          s = s.substr(0,i)+s.substr(i,k).split('').reverse().join('')+s.substr(i+k);
     }
     return s;
};
var s = "abcdefg";
console.log(reverseStr(s,2))