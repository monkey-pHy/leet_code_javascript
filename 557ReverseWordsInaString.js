var reverseWords = function(s) {
    var array = s.split(' ');
    var array1 = [];
    for(let i =0; i<array.length; i++){
        array1.push(array[i].split('').reverse().join(''));
    }
    return array1.join(' ');
}
var s = "Let's take LeetCode contest";
console.log(reverseWords(s))