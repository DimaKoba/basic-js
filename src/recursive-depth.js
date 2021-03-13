const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let res = 1; //счетчик
    arr.forEach(item =>{
        if(Array.isArray(item)){ //прверка на подмассив
          let count = 1
            count += this.calculateDepth(item); //рекурсии => count++
            count > res ? res = count : res; //
        }
    })
    return res;
  }
}