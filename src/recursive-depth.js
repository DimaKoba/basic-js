const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let res = 1; 
    arr.forEach(item =>{
        if(Array.isArray(item)){
          let count = 1
            count += this.calculateDepth(item); 
            count > res ? res = count : res; 
        }
    })
    return res;
  }
}