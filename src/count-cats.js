const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  for(let item of matrix){
      for(let cats of item){
          if(cats === '^^'){
              count++;
          }
      }
  }
  return count;
};
