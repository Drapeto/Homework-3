// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.generatePassword();
var passwordText = document.querySelector("#password");
var characterNumbers = count.

// Write password to the #password input
function writePassword() {
    var characterNumbers = count >=8 <=128,
    charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+"
    retVal = "";
    for (var i = 0, n = charset.characterNumbers; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }
  
  

}

// Add event listener to generate button
// syntax
generateBtn.addEventListener("click", writePassword);
  window.alert("You will need to select criteria for a password");
  alert('How many characters do you want your password to generate');

