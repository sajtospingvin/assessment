// Initialize numbers
const singularsTeens = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];


function numberToWord(num) {
  // To find the correct index of the singularsTeens array
  var number = num % 10;

  if (num == "") {
    return "Please type a number";
  } else if (num < 20) {
    return singularsTeens[num];
  }

  // for example: 88 / 10 = 8.8 (~8) - 2 = 6 --> so the index is 6, which is "eighty" + 88 % 10 = 8 --> eighty-eight
  else if (num < 100) {
    return tens[Math.floor(num / 10) - 2] + (number ? "-" + singularsTeens[number] : "");
  } else if (num < 1000) {
    return singularsTeens[Math.floor(num / 100)] + " hundred" + (num % 100 == 0 ? "" : " and " + numberToWord(num % 100));
  } else if (num > 999999) {
    return numberToWord(Math.floor(num / 1000000)) + " million" + (num % 1000000 == 0 ? "" : " " + numberToWord(num % 1000000));
  }
  return numberToWord(Math.floor(num / 1000)) + " thousand" + (num % 1000 != 0 ? " " + numberToWord(num % 1000) : "");

}


// UI
var input = document.getElementById("inputField");

// Show the result on the frontend
document.getElementById("submit").addEventListener("click", function() {
  document.getElementById("result").innerHTML = "Your number: " + numberToWord(input.value)
});

// Submit by Enter
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("submit").click();
  }
});
