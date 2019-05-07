var compress = function(chars) {
    let i = chars.length-1;
    while(i>=0){
        let curr = chars[i];
        let c = 1;
        while(curr === chars[--i]) c++;
        
        if(c>1) s.splice(i+2,c-1,...String(c));
    }
    return chars.length;
};
var s = ["a","a","b","b","c","c","c"];
console.log(compress(s)) 