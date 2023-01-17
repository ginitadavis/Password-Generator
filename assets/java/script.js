// Assignment code here

//Declaration of variables
var tagLength; //Length input from user
var uppercaseLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var symbols = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\'", "^", "_", "`", "{", "|", "}", "~"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var tagUpperLetter;
var tagLowerLetter;
var tagSymbol;
var tagNumber;
var passwordElements = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword(password) {

  //Calls function generatePassword and receives the result
  var password = generatePassword();

  //Testing if function received the password
  console.log("This should show the generated password: " + password);
  var passwordText = document.querySelector("#password");

  //Displays generated password into the textbox in the page
  passwordText.value = password;

}

function prompts() {
  //Variables will store user responses to wanting uppercase and lowercase letters, symbols, and numbers
  tagUpperLetter = confirm("Do you want upper case letters?");//Stores true or false
  tagLowerLetter = confirm("Do you want lower case letters?");//Stores true or false
  tagSymbol = confirm("Do you want symbols?");//Stores true or false
  tagNumber = confirm("Do you want numbers?");//Stores true or false

  //Verifies if the user selected at least one character option
  if (!tagUpperLetter && !tagLowerLetter && !tagSymbol && !tagNumber) {
    window.alert("Please select at least one character option.");

    //If no character option is selected we will prompt the series of questions until an option is selected
    prompts();
  }
}

function generatePassword() {

  //Declared and initialized a variable that will store the completed password
  var pass = "";
  //Initialized array with all the elements for the password
  passwordElements = [];

  //Stores the password length entered by the user in variable tagLength if the variable is empty
  var tagLengthInput = prompt("Please enter a password length between 8 and 128 characters:");

  //Converts the user's input into a number - If not a number, the result will be NaN (Not-A-Number)
  tagLength = Number(tagLengthInput);

  //If the input is not a number, the user will see a message to enter a number
  if (isNaN(tagLength)) {
    window.alert("You entered '" + tagLengthInput + "'. You must enter a number between 8 and 128.")

    //If the user enters a character different than a number, the function will be called again
    generatePassword();
  } else {

    //If the lenght is below 8 or above 128 user must enter a new length
    if (tagLength < 8 || tagLength > 128) {
      window.alert("That's not a valid length. Please try again!")

      //If length is invalid, the function generatePassword is going to be called until the valid input is obtained
      generatePassword();

    } else {

      //If a valid input is obtained then we will call the function prompts that
      //displays a series of prompts the user must answer
      prompts();

      //Adds uppercase letters to password array
      if (tagUpperLetter) {
        passwordElements = passwordElements.concat(uppercaseLetter);
      }
      //Adds lowercase letters to password array
      if (tagLowerLetter) {
        passwordElements = passwordElements.concat(lowercaseLetter);
      }
      //Adds symbols to password array
      if (tagSymbol) {
        passwordElements = passwordElements.concat(symbols);
      }
      //Adds numbers to password array
      if (tagNumber) {
        passwordElements = passwordElements.concat(numbers);
      }
    }
  }
  //We get the length of the array, after the array of elements is completed
  var passwordElementsLength = passwordElements.length;

  //************TEST************* */
  console.log(passwordElements);
  console.log(tagLength);

  //Loop that counts the times the entered length by the user and grabs random indexes values from the
  //array that contains the user's selected characters
  for (var i = 0; i < tagLength; i++) {
    pass += passwordElements[Math.floor(Math.random() * passwordElementsLength)];
  }

  //Testing in the console
  console.log(pass);
  return pass;
}



