
// function longestCommonPrefix() {
    var strs = ["flower","flow","flight"];
    var emptyStr = ''
    var firstStr = strs[0];
    if (!strs) return emptyStr;
    for(var i=0; i< strs.length; i++){
        for(var j= 1; j<strs.length; j++) {
            if(firstStr[i] != strs[j][i]){
                return emptyStr;
            }else {
                return 'wrong';
            }
        }
        // emptyStr += firstStr[i];
    }
    // console.log(emptyStr)
// };
// longestCommonPrefix();