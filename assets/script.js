// Global Variables
var specialCharacters;
var numericCharacters;
var lowerCase;
var upperCase;
var passwordLength;

// Random Global Variables
var randomListNum;
var randomPassword = [];

// Character Lists
var specialCharactersList = ["?", "!", "@", "$", "+", "-", "=", "~", "%", "*", ","]
var numericList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var lowerCaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function randomList() {
  randomListNum = Math.floor(Math.random() * 4);
  console.log(randomListNum);
}


function passwordGenerator() {
for (let i = 0; i < passwordLength; i++) {
  randomList();
  if (randomListNum == 0 && specialCharacters === true) {
  var randomSpecialIndexNum = Math.floor(Math.random() * specialCharactersList.length);
  randomPassword.push(specialCharactersList[randomSpecialIndexNum]);
  console.log(randomPassword);
  } else if (randomListNum == 1 && numericCharacters === true) {
    var randomNumericIndexNum = Math.floor(Math.random() * numericList.length);
    randomPassword.push(numericList[randomNumericIndexNum]);
    console.log(randomPassword);
  } else if (randomListNum == 2 && lowerCase === true) {
    var randomLowerCaseIndexNum = Math.floor(Math.random() * lowerCaseList.length);
    randomPassword.push(lowerCaseList[randomLowerCaseIndexNum]);
    console.log(randomPassword);
  } else if (randomListNum == 3 && upperCase === true) {
    var randomUpperCaseIndexNum = Math.floor(Math.random() * upperCaseList.length);
    randomPassword.push(upperCaseList[randomUpperCaseIndexNum]);
    console.log(randomPassword);
  } else {
    i--;
  }}
};

function checkValidity() {
  if (specialCharacters === false && numericCharacters === false && lowerCase === false && upperCase === false) {
    alert("No password can be generated because there are no characters to choose from. Please try again.");
  } else {
    passwordGenerator();
  };
};

function askForSpecialCharacters() {
  specialCharacters = prompt("Should special characters be included?");
  specialCharacters.toLowerCase();
  if (specialCharacters == "y" || specialCharacters == "yes") {
    specialCharacters = true;
    console.log(specialCharacters);
    checkValidity();
  } else if (specialCharacters == "n" || specialCharacters == "no") {
    specialCharacters = false;
    console.log(specialCharacters);
    checkValidity();
  } else {
    alert("Please type 'yes' or 'no.'");
    askForSpecialCharacters();
  }
};

function askForNumericCharacters() {
  numericCharacters = prompt("Should numeric characters be included?");
  numericCharacters.toLowerCase();
  if (numericCharacters == "y" || numericCharacters == "yes") {
    numericCharacters = true;
    console.log(numericCharacters);
    askForSpecialCharacters();
  } else if (numericCharacters == "n" || numericCharacters == "no") {
    numericCharacters = false;
    console.log(numericCharacters);
    askForSpecialCharacters();
  } else {
    alert("Please type 'yes' or 'no.'");
    askForNumericCharacters();
  }
};

function askForLowerCase() {
  lowerCase = prompt("Should lowercase characters be included?");
  lowerCase.toLowerCase();
    if (lowerCase == "y" || lowerCase == "yes") {
      lowerCase = true;
      console.log(lowerCase);
      askForNumericCharacters();
    } else if (lowerCase == "n" || lowerCase == "no") {
      lowerCase = false;
      console.log(lowerCase);
      askForNumericCharacters();
    } else {
      alert("Please type 'yes' or 'no.'");
      askForLowerCase();
    }
};

function askForUpperCase() {
  upperCase = prompt("Should uppercase characters be included?");
  upperCase.toLowerCase();
    if (upperCase == "y" || upperCase == "yes") {
      upperCase = true;
      console.log(upperCase);
      askForLowerCase();
    } else if (upperCase == "n" || upperCase == "no") {
      upperCase = false;
      console.log(upperCase);
      askForLowerCase();
    } else {
      alert("Please type 'yes' or 'no.'");
      askForUpperCase();
    }
};

function generatePassword() {
  var isValidPasswordLength;
  randomPassword = [];
  passwordLength = prompt("Please specify the length of your password, from 8-128 characters.");
    if (passwordLength >= 8 && passwordLength <= 128) {
      isValidPasswordLength = true;
      console.log(passwordLength);
      askForUpperCase();
    } else {
      isValidPasswordLength = false;
      alert("Invalid password length! Please try again.");
    }
};



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = randomPassword.join("");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
