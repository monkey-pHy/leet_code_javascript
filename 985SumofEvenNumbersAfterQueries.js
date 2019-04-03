/** 
 * 题目: Sum of Even Numbers After Queries
 * 具体：We have an array A of integers, and an array queries of queries.

        For the i-th query val = queries[i][0], index = queries[i][1], we add val to A[index].  Then, the answer to the i-th query is the sum of the even values of A.

        (Here, the given index = queries[i][1] is a 0-based index, and each query permanently modifies the array A.)

        Return the answer to all queries.  Your answer array should have answer[i] as the answer to the i-th query.
 * 理解：输入一组整数数组A和一组询问queries，对于第i个询问val=queries[i][0]，index=queries[i][1],我们将val加到A[index]中，然后第i次询问的答案就是A中所有偶数总和，返回所有询问的答案。
*/
var sumEvenAfterQueries = function(A, queries) {
       var bSum = A.reduce(function(p, n) {
              return n % 2 === 0 ? p + n : p
          }, 0)
          var res = []
          queries.forEach(function (item) {
              var val = item[0]
              var idx = item[1]
              var sum = A[idx] + val
              sum % 2 === 0 ? 
                           (A[idx] % 2 === 0 ? bSum += val : bSum += sum) : 
                           (A[idx] % 2 === 0 ? bSum -= A[idx] : null)
              A[idx] = sum
              res.push(bSum)
          })
          return res
};
var array= [1,2,3,4],queries = [[1,0],[-3,1],[-4,0],[2,3]];
console.log(sumEvenAfterQueries(array,queries));