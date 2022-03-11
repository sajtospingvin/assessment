// Initialize numbers
const singulars = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const tens = ["twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const thousands = ["thousand", "million", "billion", "trillion"];


function numberToWord(num) {
  var number = num % 10; // To find the correct index of the singulars array

  if (num < 10) {
    return singulars[num];
  } else if (num >= 10 && num < 20) {
    return teens[number];
  } else if (num < 100) {
    return tens[Math.floor(num / 10) - 2] + (number? "-" + singulars[number]: "");  // for exmaple: 88 / 10 = 8.8 (~8) - 2 = 6 --> so the index is 6, which is "eighty" + 88 % 10 = 8 --> eighty-eight
  } else if (num < 1000) {
    return singulars[Math.floor(num / 100)] + " hundred" + (num % 100 == 0? "": " and " + numberToWord(num % 100));
  }
    return numberToWord(Math.floor(num / 1000)) + " thousand" + (num % 1000 != 0? " " + numberToWord(num % 1000): "");

}

//Show the result on the frontend
document.getElementById("submit").addEventListener("click", function() {

  let number = document.getElementById("inputField").value;

  document.getElementById("result").innerHTML = "Your number: " + numberToWord(number)
});
