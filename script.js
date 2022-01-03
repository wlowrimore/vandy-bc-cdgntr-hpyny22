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

function randSample(chars) {
  const charLength = chars.length;
  const rand = Math.random() * charLength;
  const index = Math.floor(rand);
  return chars[index];
}

// Get the requested length of password between 8 and 128 characters
function getLength() {
  var passLength = window.prompt("Enter a number between 8 and 128 to set your password length");
  passLength = parseInt(passLength);

  if (passLength < 8) {
    window.prompt("password length must be at least 8 characters");
    return getLength(); 
  } else if (passLength > 128) {
    window.prompt("password length must be no more than 128 characters");
    return getLength();
  } else if (isNaN(passLength)) {
    window.prompt("INVALID ENTRY! PLEASE ENTER A NUMBER BETWEEN 8 AND 128");
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

// Generate password by collecting characters
function generatePassword() {
  const passLength = getLength();
  var passTypes = getTypes();
  
  while (passTypes.length === 0) {
    alert("You must choose at least one character type!");
    passTypes = getTypes();
  }

  var password = "";
  const typeCollection = [];
  if (passTypes.includes("lowerCase")) {
    password = password + randSample(lowerCase);
    typeCollection.push(lowerCase);
  }
  if (passTypes.includes("upperCase")) {
    password = password + randSample(upperCase);
    typeCollection.push(upperCase);
  }
  if (passTypes.includes("numbers")) {
    password = password + randSample(numeric);
    typeCollection.push(numeric);
  }
  if (passTypes.includes("symbols")) {
    password = password + randSample(specialChar);
    typeCollection.push(specialChar);
  }

  

  while (password.length < passLength) {
    let typeString = randSample(typeCollection);
    password = password + randSample(typeString);
  }
  return password;
}

  


// Write password to the #password input
function writePassword() {
  
  const password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
