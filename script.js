// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.getElementById("password");


// Write password to the #password input/write all code here for the button
function writePassword() {
  var length = Number(prompt("Type the amount of characters you want between 8 and 128"))
  
  if (length<8 || length>128){

    alert("Password must contain at least 8 charaters and no more than 128.")
  }
  else{

    var upperCase = confirm("Do you want uppercase characters?")
    var charset = "";
    if (upperCase) {
      charset = charset + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    var lowerCase = confirm("Do you want lowercase characters?")
    if (lowerCase) {
      charset += "abcdefghijklmnopqrstuvwxyz"
    }
    var symbols = confirm("Do you you want to inlcude symbols?")
    if (symbols) {
      charset += "!@#$%^&*()_+"
    }
    var numbers = confirm("Do you you want to inlcude numbers?")
    if (numbers) {
      charset += "1234567890"
    }
  }

  retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
 
  passwordText.value = retVal
}



// Add event listener to generate button
// syntax
generateBtn.addEventListener("click", writePassword);


