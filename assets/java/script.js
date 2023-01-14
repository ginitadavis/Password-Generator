// Assignment code here

//Declaration of variables
var tagLength;
var uppercaseLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var symbols = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "^", "_", "`", "{", "|", "}", "~"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var tagUpperLetter;
var tagLowerLetter;
var tagSymbol;
var tagNumber;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword(password) {
  var password = generatePassword();
  console.log("This should show the generated password: "+ password);
  var passwordText = document.querySelector("#password");
  console.log("This should show the generated password: "+ passwordText);
  passwordText.value = password;

}

/* COMMENT ALL THIS SECTION FOR NOW
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
*/

//************Practice section************
//************Practice section************
//************Practice section************



//Adding all the possible elements of a password in one variable
var passwordElements = [];

function prompts() {
  //Set up variables that will store user responses to wanting upper and lower letters, symbols, and numbers
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

  var pass = "";

  //Stores the password length entered by the user in variable tabLength if the variable is empty
    tagLength = prompt("Please enter a password length between 8 and 128 characters");

  //If the lenght is below 8 or above 128 user must enter a new length
  if (tagLength < 8 || tagLength > 128) {
    window.alert("That's not a valid length. Please try again!")
    generatePassword();
  } else {

    //Displays a series of prompts the user must answer
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


