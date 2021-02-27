const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  throw new CustomError('Not implemented');
  let arr = [];
  for (let i of members) {
    if (typeof i !== 'string') {
      return false
    } else {
      arr.push(i[0]);
    }
  }
  return arr.sort().join('');
};
