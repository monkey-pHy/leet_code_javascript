var isPalindrome = function(s) {
    let arrBefore = s.toUpperCase().match(/[a-zA-Z0-9]+/g);
    if(arrBefore == null) return true;
    let strBefore = arrBefore.join('');
    let strReverse = strBefore.split('').reverse().join();
    if(strBefore == strReverse) return true;
    else return false;

};
var s1 = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s1));