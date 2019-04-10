var maxDistToClosest = function(seats) {
    var max = 0;
    var current = 0;
    var startIndex = 0;
    while (seats[startIndex] !== 1) {
        startIndex++;
        max++;
    }
    for (var i = startIndex; i < seats.length; i++) {
        if (seats[i] === 1) {
            if (current > 0) {
                max = Math.max(max, Math.ceil(current/2));
            } 
            current = 0;
        } else {
            current++;
        }
    }
    
    max = Math.max(max, current);
    
    return max;    
};
var array= [1,0,0,0,1,0,1];
console.log(maxDistToClosest(array));