/**
 * 
 * 题目解析：Toeplitz矩阵，每一方向由左上到右下的对角线上具有相同的元素
 */
var isToeplitzMatrix = function(matrix) {
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j]==matrix[i+1][j+1]) return true;
        }
    }
    return false;
};
var array= [
    [1,2,3,4],
    [5,1,2,3],
    [9,5,1,2]
  ];
console.log(isToeplitzMatrix(array));