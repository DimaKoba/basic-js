const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'}) {
  let madeStr = String(str);
  let madeAdditionStr = String(addition);

let arr = [];

for(let i = 0; i<repeatTimes; i++){
   arr.push(madeStr);

if(madeAdditionStr !=''){
 for(let n=0; n<additionRepeatTimes; n++){
   arr.push(madeAdditionStr)
   if(n < additionRepeatTimes-1){
        arr.push(additionSeparator)
    }
    
    }
    
}
if(i<repeatTimes-1){
arr.push(separator)
}
}
return arr.join('');
};
  