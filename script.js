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

// Pseudo Code
// 1. create arrays for letters, numbers, and special characters.
// 2. create a prompt for user input how many characters they want for their password.
// 3. create a filter (confirm) for which characters they want to include or exclude.
// 4. create a variable to contain the user input
// 5. create a for loop(s) to generate the randomize password 
// 6. then push the ranomdized generated password to the text box.