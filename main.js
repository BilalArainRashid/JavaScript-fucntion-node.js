const { constants } = require("buffer");
const { reverse } = require("dns");
const fs = require(`fs`);
const { fileURLToPath } = require("url");
const { parseString } = require("xml2js");
const prompt = require("prompt-sync")();

     function CTof () {
        const celsius = prompt("Enter a celsius value: ");
        const fahrenheit = parseInt(celsius * 1.8) + 32
        console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);
      }

       function areaRectangle(width,length){
           var length = prompt("Enter a whole number for length of your rectangle.");
           var width = prompt("Enter a whole number for width of your rectangle.");
           let area = width * length
           console.log(area);
       }
       function calculateArea(myRadius) {
        return (myRadius * myRadius * Math.PI);
        
      }
      
      function MyArea() {
        var area = calculateArea(myRadius);
        console.log("A circle with a " + myRadius + "centimeter radius has an area of " + area + "centimeters. <br>" + myRadius + "represents the number entered by the user <br>" + area + "represents circle area based on the user input.");
      
      
      }
      
      var myRadius = parseFloat(prompt("Enter the radius of your circle in cm:", 0));
      MyArea(myRadius);

      function reverseInt(int){
        let newInt = "";
        for(let i = int.length - 1; i >= 0; i--){
          newInt += int[i];
        }
        return newInt;
      }
      const newInt = prompt("Enter the value :");
      const result = reverseInt(newInt);
      console.log(result);

      function countVowel(str) {
        const count = str.match(/[aeiou]/g).length;

        return count;
      }

      const string = prompt("Enter a string");
      const answer = countVowel(string);

      console.log(answer);


      // program to check if the string is palindrome or not

function checkPalindrome(string) {

  
  const arrayValues = string.split('');

 
  const reverseArrayValues = arrayValues.reverse();


  const reverseString = reverseArrayValues.join('');

  if(string == reverseString) {
      console.log('It is a palindrome');
  }
  else {
      console.log('It is not a palindrome');
  }
}


const strings = prompt('Enter a string: ');
checkPalindrome(strings);
      

const min = parseInt(prompt("Enter a min value"));
const max = parseInt(prompt("Enter a max value"));

const a = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(`Random value between  ${min} and ${max} is ${a}` );


const number = parseInt(prompt("Enter a positive integer"));

if(number < 0){
  console.log("Error! Factorial for negative number does not exist");
}
else if (number === 0){
  console.log(`The Factorial of ${number} is 1.`);
}
else{
  let fact = 1;
  for (i = 1; i <= number; i++){
    fact *= i;
  }
  console.log(`The factorial of ${number} is ${fact}`);
}


function capitalizeTheFirstLetterOfEachWord(words) {
  var separateWord = words.toLowerCase().split(' ');
  for (var i = 0; i < separateWord.length; i++) {
     separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
     separateWord[i].substring(1);
  }
  return separateWord.join(' ');
}
const string1 = prompt("Enter a string");
const result1 =  capitalizeTheFirstLetterOfEachWord(string1);
console.log(result1);

function PossibleCombination(str){
  let combination = [];

  for(let i = 0 ;i < str.length; i++)
{
    for(let j = i + 1; j< str.length + 1; j++)
    {
        combination.push(str.slice(i , j));
    }
}
return combination;
}


  const string2 = prompt("Enter a name");
  const result3 = PossibleCombination(string2);

  console.log(result3);


module.exports=CTof=areaRectangle;