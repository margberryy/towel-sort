
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let sortedMatrix = [];
  if(matrix ===undefined){
    return [];
  }else{
    for (let i = 0; i < matrix.length; i++){
      if (i % 2 !== 0){
        matrix[i] = matrix[i].reverse();
      } 
    sortedMatrix = sortedMatrix.concat(matrix[i]);
  }
  return sortedMatrix;}
}
