var countSegments = function(s) {
    s = s.replace(/\s+/g,' ').trim();
    if(s=='') return 0;
    var arr = s.split(' ');
    return arr.length;
};
var s = "Hello, my name is John";
console.log(countSegments(s)) 