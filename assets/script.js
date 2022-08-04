// Assignment Code
var generateBtn = document.querySelector('#generate');

var upperCasePassword = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


var lowerCasePassword = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


var numericalPassword = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]


var symbolicPassword = ["!", "@", "#", "$", "%", "&", "*", "~", "?"]

// const checkbox_d = document.querySelector('#symbolic');
// const passwordlength = document.querySelector('#length');

// console.log(passwordlength)
// console.log(useLowerCase)
// console.log(useUpperCase)
// console.log(useNum)
// console.log(checkbox_d)




function generatePassword() {
    var password_array = [];

  var passwordlength = prompt("enter a value between 8-128 characters")
  var useLowerCase = confirm("Do you want to include lower case characters?")
  var useUpperCase = confirm("Do you want to include UPPER CASE characters?")
  var useNumbers = confirm("Do you want to include numbers?")
  var useSymbols = confirm("Do you want to include symbols?")


  if (useUpperCase === true) {
    password_array = password_array.concat(this.upperCasePassword)
    // then include this element in generatePassword 
    console.log(password_array)
  }
  if (useLowerCase === true) {
    password_array = password_array.concat(lowerCasePassword)
    // then include this element in generatePassword 
  }
  if (useNumbers === true) {
    password_array = password_array.concat(numericalPassword)
    // then include this element in generatePassword 
  }
  if (useSymbols === true) {
    password_array = password_array.concat(symbolicPassword)
    // then include this element in generatePassword 
    console.log(password_array)
  }
  if (passwordlength > 7 && passwordlength < 129) {
      if (password_array.length > 0) {
          var password = [];
        for (var count = 0; count < passwordlength; count++) { 
          password = password.concat(password_array[Math.floor(Math.random() * password_array.length)])
 }
        return password.join('');
    }
  }
  else alert("choose a length between 8 & 128 charachters")
  return password;
}
  // Write password to the #password input
function writePassword() {
  var password = generatePassword();
console.log(password)

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}    

  // Add event listener to generate button
document.getElementById("generate").addEventListener("click", writePassword);
