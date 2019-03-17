var addToArrayForm = function(A, K) { 
    const ans = [];
    let prevLeft = 0;
    let i = A.length - 1;
    while (i >= 0 || K !== 0 || prevLeft > 0) {
      // Get current digit for A and K
      const aDigit = i >= 0 ? A[i] : 0;
      const kDigit = K % 10;
      
      // Push the result digit to the ans array
      const addResult = kDigit + aDigit + prevLeft;
      const resultDigit = addResult % 10;
      ans.push(resultDigit);
        
      // Prepare for the next loop
      prevLeft = addResult > resultDigit ? 1 : 0;
      K = Math.floor(K / 10);
      i--;
    }
  
    // Remember to reverse the array
    return ans.reverse();
}; 
var array = [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3];
var p =addToArrayForm(array,516);
console.log(p);