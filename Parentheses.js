var isValid = function(s) {
    var rightSymbols =[];
    for(var i=0; i<s.length; i++) {
       if(s[i] == '('){
           rightSymbols.push(")");
       }else if(s[i] == "{"){
           rightSymbols.push("}");
       }else if(s[i] == "["){
           rightSymbols.push("]");
       }else if(rightSymbols.pop() == s[i]) {
           console.log("配对成功")

       }
    }s
    // return !rightSymbols.length;
};

var p = '()';
isValid(p);