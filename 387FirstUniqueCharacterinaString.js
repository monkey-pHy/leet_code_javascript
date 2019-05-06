var firstUniqChar = function(s) {
    for(let i=0;i<s.length;i++){
        if(s.indexOf(s.charAt(i))==s.lastIndexOf(s.charAt(i))){
            return i;
        }
    }
    return -1;
};
var str = "leetcode";
console.log(firstUniqChar(str));