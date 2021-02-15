// Assignment code here

generatePassword = () => {
  //set password length with user input 
  var passLength = window.prompt("How long do you want your password? Choose a length between 8 and 128 characters.");
  
  //if entry is invalid make them try again 
  if (passLength < 8 || passLength > 128) {
    passLength = window.prompt("Sorry, that is not a valid option. \nPlease select a number between 8 and 128.");
  }

  //create holder array for user input characters
  var passwordBank = [];

  //create arrays of all possible inclusions
  var lowerCaseBank = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperCaseBank = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numBank = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  var specialCharBank = [' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', '=', ',', '-', '.', '/', ':', ';', '<', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];

  var passInput = window.prompt("What characters would you like included in your password? Enter the number associated with your choice. \n \n 1. LowerCase Letters \n 2. Lower and UpperCase letters \n 3. LowerCase letters, UpperCase letters, and Numbers. \n 4. LowerCase letters, UpperCase letters, Numbers, and Special Characters." )

  switch (passInput) {
    case '1':
      passwordBank = passwordBank.concat(lowerCaseBank);
      break;
    case '2': 
      passwordBank.push(...lowerCaseBank, ...upperCaseBank);
      break;
    case '3':
      passwordBank.push(...lowerCaseBank, ...upperCaseBank, ...numBank);
      break;
    case '4': 
      passwordBank.push(...lowerCaseBank, ...upperCaseBank, ...numBank, ...specialCharBank);
      break;
    default:
      window.alert('ERROR: invalid input. Try Again');
      generatePassword();
  }

  var password = '';

  
  //for loop using user inputted password length 
  for (i = 0; i < passLength; i++) {

    //concat final string with random index of the character holder array 
    password += passwordBank[Math.floor(Math.random() * passwordBank.length)];
  }

  //return final password 
  return password;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

