var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var uppercaseList = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var lowercaseList = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var numbericList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var characterList = [
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
  ];

  // empty array

  var resultArray = [];
  var userArray = [];

  uppercaseList[1];
  //-----------------------------------------------------------------
  var numCharacter = prompt(
    "How many characters you would like for it?, Please choose between 8 and 128?"
  );
  var numbers = confirm("Click OK if you want numbers in your password?");
  var uppercases = confirm("Click OK you want Uppercases in your password?");
  var lowercases = confirm("Click OK you want lowercases in your password?");
  var characters = confirm(
    "Click OK you want special characters in your password?"
  );

  if (numbers) {
    resultArray = resultArray.concat(numbericList);
  }

  if (uppercases) {
    resultArray = resultArray.concat(uppercaseList);
  }

  if (lowercases) {
    resultArray = resultArray.concat(lowercaseList);
  }

  if (characters) {
    resultArray = resultArray.concat(characterList);
  }
  console.log(resultArray);

  for (var i = 0; i < numCharacter; i++) {
    userArray.push(resultArray[Math.floor(Math.random() * resultArray.length)]);
  }

  return userArray.join("");
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
