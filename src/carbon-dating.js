const CustomError = require("../extensions/custom-error");

 
const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let num = +sampleActivity
  if(typeof num !== 'Number') {
    return false
  } else {
    
    return Math.ceil(MODERN_ACTIVITY/num)/(0.693/HALF_LIFE_PERIOD)
  }
  
  
};
