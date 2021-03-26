const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  construcror (direction = true) {
      this.direction = direction
  }
  encrypt(message, key) {
if(message === undefined || key === undefined){
   throw Error()
}

    let abc = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
    let messageUp = message.toUpperCase();
    let keyUp = key.toUpperCase();
    
    for(let n =0; n<messageUp.length-1; n++){
      messageUp += messageUp[n]
  }
    
  let arr = [];

for(let i=0, j=0; i< messageUp.length; ++i){
    if(messageUp[i] === ' '){
        arr.push(messageUp[i]);
    }else{
        arr.push(abc[(abc.indexOf(messageUp[i]) + abc.indexOf(keyUp[j++ % keyUp.length])) % abc.length]);
    }
    
}

return arr.join('');
    
  }  
  
  
  decrypt(message, key) {
    if(message === undefined || key === undefined){
      throw Error()
   }

   let abc = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
   let decryptmessageUp = message.toUpperCase();
   let decryptkeyUp = key.toUpperCase();
   let arr = [];
if(this.direction == false){
  decryptmessageUp = decryptmessageUp.split('').reverse().join('');
}
  for(let i=0, j=0; i< decryptmessageUp.length; ++i){
    if(decryptmessageUp[i] === ' '){
        arr.push(decryptmessageUp[i]);
    }else{
      let minusIndex = abc.indexOf(decryptmessageUp[i]) - abc.indexOf(decryptkeyUp[j++ % decryptkeyUp.length])
      if(minusIndex<0){
        arr.push(abc[abc.length + minusIndex]);
      } else{
        arr.push(abc[minusIndex]);
      }

      if(this.direction == false){
        return arr.reverse().join('')
      } else{
        return arr.join('')
      }
        
    }
    
}















}
  }


module.exports = VigenereCipheringMachine;
