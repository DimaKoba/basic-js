const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
 
  let arr = [];

   if(!Array.isArray(members)) return false;
let teamName = members.map(item => {
    if(typeof item === 'string') {
arr.push(item);
}
});
for(let i=0; i < arr.length; i++){
    arr[i] = arr[i].replace(/\s+/gmi, "");
}
 
let result = arr.map(prop => prop.slice(0,1).toUpperCase());

return result.sort().join('');
 
 
 
};
