var detectCapitalUse = function(word) {
    if(word.length ===1 ) return true;
    if(word === word.toUpperCase()) return true;
    if(word === word.toLowerCase()) return true;
    
    word = word.slice(1,word.length);
    let lword = word.toLowerCase();
    return word === lword;
};
var s = "FlaG";
console.log(detectCapitalUse(s)) 