var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
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

function passwordCriteria() {

    var length = parseInt(prompt('How many characters will your password contain?'), 10);

    if (Number.isNaN(length)) {
        alert("Password length must be a number.");
        return null;
    }

    if (length < 8) {
        alert("Password length must be at least 8 characters.");
        return null;
    }

    if (length > 128) {
        alert("Maximum password length is 128 characters.");
        return null;
    }
    
    var includesNumericCharacters = confirm(
        "Click to confirm including numeric characters in your password."
    );

    var includesSpecialCharacters = confirm(
        "Click to confirm including special characters in your password."
    );

    var includesUpperCasedCharacters = confirm(
        "Click to confirm including upper case characters in your password."
    );

    var includesLowerCasedCharacters = confirm(
        "Click to confirm including lower case characters in your password."
    );

    var passwordInput = {
        length: length,
        includesNumericCharacters: includesNumericCharacters,
        includesSpecialCharacters: includesSpecialCharacters,
        includesUpperCasedCharacters: includesUpperCasedCharacters,
        includesLowerCasedCharacters: includesLowerCasedCharacters,
    }


        


}



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
