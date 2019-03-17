var addDigits = function(num) {
    while(num>=10){
        var dd=num.toString();
        var count=0;
        for(var i=0;i<dd.length;i++){
            count+=parseInt(dd[i]);
        }
        num=count;
    }
    return num;
};
var array = 38;
console.log(addDigits(array));