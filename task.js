const fs = require(`fs`);
const prompt = require("prompt-sync")();
const xml2js = require(`xml2js`);
const util = require('util');
// const parseInt = new xml2js.Parser();

var main=require('./main')
console.log(main());



    function Sum(){
       const num1 = 5;
       const num2 = 6;
       const num3 = 9;
       const num4 = 10;
       const num5 = 12;

       const sum = num1+num2+num3+num4+num5+(prompt("add your numbers"));

       console.log(sum); 
    }
    
    function dividedBy() {
        const a = 5;
        const b = 6;

        const dividedBy = a/b;(prompt("Enter your division"));

        console.log('The divided remainder answer ' /a/b/ 'is:' /dividedBy);

        console.log(5 / 6);
    }

    function getReport() {
        var name =(prompt("name1")).value;
        var english = parseInt(prompt("your english marks "));
        var math = parseInt(prompt("your math marks "));
        var physics = parseInt(prompt("your physics marks "));
        var chemistry = parseInt(prompt("your chemistry marks "));
        var urdu=parseInt(prompt("your urdu marks"));

        var totalMarks = english+math+physics+chemistry+urdu;
        
        var percentage = (totalMarks / (5* 100) ) * 100;

        console.log(percentage);
    }

    function calculate() {
    var chemistry = (prompt("chemistry marks"));
    var urdu = (prompt("your urdu marks"));
    var math = (prompt("your math marks"));
    var physics = (prompt("your physics marks"));
    var english = (prompt("your english marks"));
    var grades = "";

    var totalGrades =
    parseFloat(chemistry)+
    parseFloat(urdu)+
    parseFloat(physics)+
    parseFloat(english)+
    parseFloat(math);
    
    var percentage = (totalGrades / 400 ) * 100;
    var percentage = (totalGrades / 400) * 100;


    if (percentage <= 100 && percentage >= 80) {
      grades = "A";
    } else if (percentage <= 79 && percentage >= 60) {
      grades = "B";
    } else if (percentage <= 59 && percentage >= 40) {
      grades = "C";
    } else {
      grades = "F";
    }

    if (chemistry == "" || urdu == "" 
    || math == "" || physics == "" || english == "") {
    console.log("please enter all fields");

  } else {
  
    if (percentage >= 39.5) {

   console.log(`out of 400 your total is ${totalGrades} and percentage is ${percentage}% <br> your grade is ${grades}. You are pass`);

} else {

if (percentage >= 20.5) {

console.log(`out of 400 your total is ${totalGrades} and percentage is ${percentage}% <br> your grade is ${grades}. You are fail`);
}
}
}
}
    
  

    console.log("----------------------------------------------------------");
    console.log("");
    console.log("Select which operation to perform ");

console.log("Sum: +");
console.log("enter your division/");
console.log("check your percentage  name1");
console.log("check your percentage and grade  grade");
console.log("Enter your temperature is degree + - ");

    
    sw= prompt("Call me which switch you perform : ");
    
    console.log("----------------------------------------------------------");
    console.log("");
     while (sw) {
      if(sw==="0"){
        break;
      }
      if(sw==="+"){
        Sum();
        sw= prompt("Enter: ");
      }
      if(sw==="/"){
        dividedBy();
        sw= prompt("Enter: ");
      }
      if(sw==="name1"){
        getReport();
        sw= prompt("Enter: ");
      }
      if(sw==="grade"){
        calculate();
        sw= prompt("Enter: ");
      }
      if(sw==="-"){
        CTof();
        sw= prompt("Enter: ");
      }
      if(sw==="-"){
        areaRectangle();
        sw= prompt("Enter: ");
      }
      if(sw==="-"){
        calculateArea();
        sw= prompt("Enter: ");
      }
      
    
    }
  