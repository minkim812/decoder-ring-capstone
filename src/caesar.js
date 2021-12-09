const caesarModule = (function () {
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    function caesar(input, shift, encode = true) {
      const message = [];
      input = input.toLowerCase();
      if (shift === 0 || shift < -25 || shift > 25) {
        return false;
      } //error handling returning false
      if (!encode) {
        shift = -shift;
      }
    for (let i = 0; i < input.length; i++) {
        let character = input.charCodeAt(i);
        if (character < 97 || character > 122) {
        message.push(String.fromCharCode(character)) 
        } else {
          //encoding a message
        character += shift;
        if (character > 96 && character < 123)message.push(String.fromCharCode(character));
        if (character < 97)message.push(String.fromCharCode(123 -(97 - character))); 
        if (character > 122)message.push(String.fromCharCode(96 +(character -122)));
        }
      } //decoding a message
      return message.join("");
     }
    return {
        caesar,
      };
    })();

    module.exports = { caesar: caesarModule.caesar };
