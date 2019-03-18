var isOneBitCharacter = function(bits) {
    if(bits.length == 1) return true;
    return bits.join("").replace(/(11|10)/g, "x").slice(-1) != "x";
};
var array= [1, 0, 0];
console.log(isOneBitCharacter(array));