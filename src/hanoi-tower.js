const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  
  let turnPerSecond = turnsSpeed / 3600;
  let turns = (2 ** disksNumber) - 1;
  let seconds = Math.floor(turns / turnPerSecond);



   return {turns, seconds};
};
