// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables
var numChar;
var upperCase;
var lowerCase;
var numbers;
var specialChar;
var password = "";

// Prompts
function promptUser() {
  password = "";
  numChar = prompt("Choose password length between 8-128 characters.");

  if (numChar >= 8 && numChar <= 128) {
    upperCase = confirm("Include uppercase letters?");
    lowerCase = confirm("Include lowercase letters?");
    numbers = confirm("Include numbers?");
    specialChar = confirm("Include symbols?");
  } else {
    numChar = alert(
      "Password length must be between 8-128 characters. Please try again."
    );
  }
}

// Variables to Strings
var charSet = [
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "abcdefghijklmnopqrstuvwxyz",
  "0123456789",
  "!@#$%^&*()_+",
];

var charString = "";

function selectedChar() {
  if (upperCase === true) {
    charString = charString + charSet[0].toString();
  }
  if (lowerCase === true) {
    charString = charString + charSet[1].toString();
  }
  if (numbers === true) {
    charString = charString + charSet[2].toString();
  }
  if (specialChar === true) {
    charString = charString + charSet[3].toString();
  }
}

// Generate Password Function
function generatePassword() {
  var charArray = charString.split("");
  for (var i = 0; i < numChar; i++) {
    var random = Math.floor(Math.random() * charString.length);
    var randomChar = charArray[random];

    password = password + randomChar;
  }
}

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", promptUser);
generateBtn.addEventListener("click", selectedChar);
generateBtn.addEventListener("click", generatePassword);
generateBtn.addEventListener("click", writePassword);
