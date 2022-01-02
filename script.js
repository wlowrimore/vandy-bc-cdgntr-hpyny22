// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page



// Assignment Code
const generateBtn = document.querySelector("#generate");


const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeric = "0123456789";
const specialChar = "!@#$%^&*()-_=+{}[].:;|\/?<>";

// Get the requested length of password between 8 and 128 characters
function getLength() {
  const passLength = window.prompt("Enter a number between 8 and 128 to set your password length");

  if (passLength < 8) {
    alert.prompt("password length must be at least 8 characters");
    return getLength(); 
  } else if (passLength > 128) {
    alert.prompt("password length must be less no more than 128 characters");
    return getLength();
  } else if (!Number.isInteger(passLength)){
    alert.prompt("INVALID ENTRY! PLEASE ENTER A NUMBER BETWEEN 8 AND 128");
    return getLength();
  }
    return passLength;
}


function getTypes() {
  const isLowerCase = window.confirm("Would you like lowercase characters in your password?");
  const isUpperCase = window.confirm("Would you like UPPERCASE characters in your password?");
  const isNumbers = window.confirm("Would you like numbers in your password?");
  const isSymbols = window.confirm("Would you like special characters in your password?");
  const types = [];

  if (isLowerCase) {
    types.push("lowerCase");
  }
  if (isUpperCase) {
    types.push("upperCase");
  }
  if (isNumbers) {
    types.push("numbers");
  }
  if (isSymbols) {
    types.push("symbols");
  }
  return types;
}
  


// Write password to the #password input
// function writePassword() {
//   var password = ""();
//   password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
