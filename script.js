// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {
  // arrays for the characters
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var number = [0,1,2,3,4,5,6,7,8,9];
  var symbols = ["!","@","#","$","%","^","&","*","(",")","{","}","[","]","<",">","."];

  // prompt for the user to input a number
  var userInput = prompt("Please choose a number between 8 and 128."); 

  // convert the string from the user input into an integer
  var numInput = +userInput;
  
  // Making sure the user inouts a number that is between 8 and 128.
  if ( userInput < 8 || userInput > 128 || !numInput) {
    alert("Please choose a number that is between 8 and 128.");
  }
  else {
    alert("Your password will be " + numInput + " characters long.");
  }

  // filters for your password
  var filterLower = confirm("Do you want to have lowercase letters in your password?");
  var filterUpper = confirm("Do you want to have uppercase letters in your password?");
  var filterNumber = confirm("Do you want to have numbers in your password?");
  var filterSymbols = confirm("Do you want to have symbols in your password?");

  

  // user has to choose at least one of the confirms above
  if (!filterLower && !filterUpper && !filterNumber && !filterSymbols) {
    alert("Please choose at least one of the conditions in order to generate your password.");
  }
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Pseudo Code
// 1. create arrays for letters, numbers, and special characters.
// 2. create a prompt for user input how many characters they want for their password.
// 3. create a filter (confirm) for which characters they want to include or exclude.
// 4. create a variable to contain the user input
// 5. create a for loop(s) to generate the randomize password 
// 6. then push the ranomdized generated password to the text box.