
//求两个字符串的最不常见子序列的长度，如果两个字符串相等，那就不存在，如果不相等，长度最长的那个字符串就是最长不常见子序列
var findLUSlength = function(a, b) {
  return a==b?-1:Math.max(a.length,b.length); 
};
var array1= "aba";
var array2 ="cdc";
console.log(findLUSlength(array1,array2));