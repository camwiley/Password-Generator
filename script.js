// Array of numeric characters included in possible password

var numericCharacters = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];

// Array of special characters included in possible password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Array of upper cased characters included in possible password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

// Array of lower cased characters included in possible password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Function to prompt user and return user input based on predefined password criteria
function passwordCriteria() {

    // Variable to store password lenth from user input
    var length = parseInt(
        prompt('How many characters will your password contain?'),
        10
    );
    // Conditional statement to check if password is not a number and if false program ends
    if (Number.isNaN(length)) {
        alert("Password length must be a number.");
        return null;
    }
    // Conditional statement to check if password is at least 8 characters long and if false program ends
    if (length < 8) {
        alert("Password length must be at least 8 characters.");
        return null;
    }
    // Conditional statement to check if password is less than or equal 128 characters and if false program ends
    if (length > 128) {
        alert("Maximum password length is 128 characters.");
        return null;
    }
    // Variable to confirm selection numeric characters
    var includesNumericCharacters = confirm(
        "Click to confirm including numeric characters in your password."
    );
    // Variable to confirm selection of special characters
    var includesSpecialCharacters = confirm(
        "Click to confirm including special characters in your password."
    );
    // Variable to confirm selection of upper case characters
    var includesUpperCasedCharacters = confirm(
        "Click to confirm including upper case characters in your password."
    );
    // Variable to confirm selection of lower case characters
    var includesLowerCasedCharacters = confirm(
        "Click to confirm including lower case characters in your password."
    );
    // Object created to store user password input
    var passwordInput = {
        length: length,
        includesNumericCharacters: includesNumericCharacters,
        includesSpecialCharacters: includesSpecialCharacters,
        includesUpperCasedCharacters: includesUpperCasedCharacters,
        includesLowerCasedCharacters: includesLowerCasedCharacters,
    };

    return passwordInput;
}
// Function to retreive random element from array
function getRandom(array) {
    var index = Math.floor(Math.random() * array.length);
    var randomEl = array[index];
  
    return randomEl;
}

// Function to generate password with user input
function generatePassword() {
    var selection = passwordCriteria();

    // Array to store final concatenation of characters 
    var finalResult = [];

    // Array to store types of characters
    var possibleCharacters = [];

    // Array to contain each type of chosen character
    var chosenCharacters = [];
  
    // If no selection is made function will end
    if (!selection) return null;

    // Conditional statement that concatenates an array of numeric characters into an array of possible characters
    if (selection.includesNumericCharacters) {
        possibleCharacters = possibleCharacters.concat(numericCharacters);

        // Push random numeric character to chosen character array
        chosenCharacters.push(getRandom(numericCharacters));
    }
     // Conditional statement that concatenates an array of special characters into an array of possible characters
    if (selection.includesSpecialCharacters) {
        possibleCharacters = possibleCharacters.concat(specialCharacters);
         // Push random special character to chosen character array
        chosenCharacters.push(getRandom(specialCharacters));
    }
     // Conditional statement that concatenates an array of upper cased characters into an array of possible characters
    if (selection.includesUpperCasedCharacters) {
        possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
        // Push upper cased character to chosen character array
        chosenCharacters.push(getRandom(upperCasedCharacters));
    }
     // Conditional statement that concatenates an array of lower cased characters into an array of possible characters
    if (selection.includesLowerCasedCharacters) {
        possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
        // Push lower cased character to chosen character array
        chosenCharacters.push(getRandom(lowerCasedCharacters));
    }
    // For loop that iterates over the length of the selection object, selecting random indices from the array of possible characters and concatenating them as the final result 
    for (var i = 0; i < selection.length; i++) {
        var possiblePassword = getRandom(possibleCharacters);

        finalResult.push(possiblePassword);
    }
    // For loop which includes at least one chosen character in the final result
    for (var i = 0; i < chosenCharacters.length; i++) {
        finalResult[i] = chosenCharacters[i];
    }
     // Turns the final result into a string
    return finalResult.join("");
}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
