// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.getElementById("password");


// Write password to the #password input/write all code here for the button
function writePassword() {
  var length = Number(prompt("Type the amount of characters you want between 8 and 128"))
  var upperCase = confirm("Do you want uppercase characters?")
  var charset="";
  if (upperCase) {
    charset = charset + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  var lowerCase = confirm("Do you want lowercase characters?")
  if (lowerCase) {
    charset += "abcdefghijklmnopqrstuvwxyz"
  }
  // charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+"
  retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  passwordText.value = retVal
}



// Add event listener to generate button
// syntax
generateBtn.addEventListener("click", writePassword);


