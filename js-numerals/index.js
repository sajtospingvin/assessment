// Initialize numbers
const singulars = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const tens = ["twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const thousands = ["thousand", "million", "billion", "trillion"];

// var input = document.getElementById("inputField").value;

function numberToWord(num) {
  var number = num % 10; // To find the correct index

  if (num < 10) {
    return singulars[num];
  } else if (num >= 10 && num < 20) {
    return teens[number];
  }

}

//Show the result on the frontend
document.getElementById("submit").addEventListener("click", function() {

  let number = document.getElementById("inputField").value;
  
  document.getElementById("result").innerHTML = "Your number: " + numberToWord(number)
});
