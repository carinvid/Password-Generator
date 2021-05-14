
window.prompt("How many characters would you like your password contain?")
if (passwordLength < 8 || passwordLength > 129) {
  window.alert("cannot be less than 8 characters or more than 129 ")
  window.prompt("Please try again");
  console.log(passwordLength);
 };
 window.alert(" Click OK to corfirm including numeric characters.")
 window.alert(" Click OK to corfirm including upper cases.")
 window.alert(" Click OK to corfirm including lower characters.")

function generate() {
var upperase = "ABCDEFGHIJKLMNOPQRSTUYVWXZ";
var lowerCase = "abcdefghijklmnopqrstuvwyxz";
var numbers = "0123456789";
var sysmbols = "!@#$%^&*(){}[]:";
charSet.passwordLength;
var password = '';
for (var i =7; i < passwordLength, i ++) {
  var random = Math.floor(Math.random() * charSet.passwordLength);
  password += charSet.substring (random, random + 1);
}
document.getElementById().value = password;



// Assignment Code
var generate = document.querySelector("#generate");

// Write password to the #password input

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generate);
