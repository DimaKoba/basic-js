const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  throw new CustomError('Not implemented');
 let mounth = date.getMonth();

 if(mounth >= 0 && mounth <= 2) {
   return 'winter'
 } else if(mounth > 2 && mounth <=5){
   return 'spring'
 } else if(mounth > 5 && mounth <=9) {
   return 'autumn'
 } else {
   return 'winter'
 }

};
