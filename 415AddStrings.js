var addStrings = function(num1, num2) {
    let num1len= num1.length;
    let num2len = num2.length;
    let maxlen = num1.length>num2.length?num1.length:num2.length;
    let carry = 0;//进位
    let sum = '';
    for(let i =0; i<maxlen;i++){
        var a = i<num1len?num1.charAt(num1len-1-i)-'0':0;
        var b = i<num2len?num2.charAt(num2len-1-i)-'0':0;
        sum = (a+b+carry)%10 +sum;
        carry = parseInt((a+b+carry)/10);
    }
    if(carry ==1) sum = carry + sum;

    return sum;
};
var s1 = "9";
var s2 ="9"
console.log(addStrings(s1,s2));