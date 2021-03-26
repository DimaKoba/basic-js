const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direction = true){
    this.direction = direction
  }  
    
//====================================

  encrypt(message, key) {
   if(message === undefined || key === undefined){
     throw new Error();
   }
  let messageUpCase = message.toUpperCase();
  let keyUpCase = key.toUpperCase();
  let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let resultArr = [];

  for(let i=0, j=0; i<messageUpCase.length; ++i){
    if(abc.indexOf(messageUpCase[i]) == -1){
resultArr.push(messageUpCase[i])
} else{
    resultArr.push(abc[(abc.indexOf(messageUpCase[i]) + abc.indexOf(keyUpCase[j++ % keyUpCase.length])) % abc.length])
}
}
return resultArr.join('');
  }
    //=================================================
  decrypt(demessage, key) {
    if(demessage===undefined || key === undefined){
      throw new Error()
    }
    let demessageUpCase = demessage.toUpperCase();
    let keyUpCase = key.toUpperCase();
    let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let resultArr = [];
if(this.direction == false){
  demessageUpCase = demessageUpCase.split('').reverse().join('');
}

    for(let n=0, j=0; n<demessageUpCase.length; ++n){
      if(abc.indexOf(demessageUpCase[n]) === -1){
        resultArr.push(demessageUpCase[n])
      } else{
        let result = abc.indexOf(demessageUpCase[n]) - abc.indexOf(keyUpCase[j++ % keyUpCase.length])
        if(result < 0) {
          resultArr.push(abc[(result + abc.length) % abc.length])
        } else {
          resultArr.push(abc[result]);
        }
          
        }
      }

      if(this.direction == false){
        return resultArr.reverse().join('')
      } else{
        return resultArr.join('');
      }
    }
}
module.exports = VigenereCipheringMachine;
