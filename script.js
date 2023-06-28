// Assignment Code
var uppercaseLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "O", "P", "Q", "R", "S", "T", "U","V", "W", "X", "Y", "Z"]
var lowercaseLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"] 
var generateBtn = document.querySelector("#generate");
function generatePassword () {
  var length = prompt ("Password must be at least 8 characters and no more than 128 characters.");
console.log(length)
if (length < 8) {
  return alert ("Password need to be greater than 8 characters")
}
if (length > 125) {
return alert ("Password needs to be less than 125 characters")
}

  var lowercaseLetter = confirm ("Would your like to include lowercase letters in your password?");
  var uppercaseLetter = confirm ("Would your like to include uppercase letters in your password?");
  var numeric = confirm ("Would your like to include numbers in your password?");
  var specialCharacter = confirm ("Would your like to include special characters in your password?");
  // we need to check which one they said yes to, and make the password to one big array "array concat"
var password = 
  for (var i = 0; i < length; i++) {
    console.log ("lopping")
//we need to get a random character for our big array and add it to password "how to grab a anaray" 
}
  return password
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
