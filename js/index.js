// // Function typeof

// var num = 10;

// console.log(typeof (num))

// var Num = "Arman";

// console.log(typeof (Num))

// var nUm = true;

// console.log(typeof (nUm))

// // tostring 

// var string = 10;

// string = toString(string)

// console.log(typeof (string))

// // parseInt

// var string = 10.22;

// string = parseInt(string)

// console.log(typeof (string))

// // parseFloat

// var string = 10.22;

// string = parseFloat(string)

// console.log(typeof (string))



// // toFixed

// var string = 10.22345678;


// console.log(string.toFixed(1))


// // toPrecision

// var string = 10.22345678;


// console.log(string.toPrecision(3))

// // Number

// console.log(typeof (Number("109")))

// console.log(Number(190))

// // how to add or concatenate strings
// var myName ="Arman Shahriar "

// var myAge =" 15"

// document.write("My name is " + myName + "<br>" +  " My age"+ myAge)

// var text = "Arman Shahriar"

// text = text.length

// document.write("Number of character " + text + "<br>" + "<br>")


// var text = prompt("Enter your name: ")

// text = text.length

// document.write("Number of character " + text + "<br>" + "<br>")


// var text = "Arman Shahriar"
// document.write(text.charAt(2) + "<br>" + "<br>")

// var text = "Arman";
// text = text.toUpperCase();
// document.write(text + "<br>" + "<br>")

// var text = "Arman";
// text = text.toLowerCase();
// document.write(text + "<br>" + "<br>")

// var text1 = "Arman"
// var text2 = "Shahriar"

// document.write(text1.concat(text2) + "<br>" + "<br>")

// var text1 = "Bangadesh";
// text = text1.slice(0, 2);
// document.write(text + "<br>" + "<br>")


// // Task
// var firstName = prompt("Enter your first name: ")
// var lastName = prompt("Enter your last name: ")
// var fullName = (firstName.concat(lastName))
// document.write(fullName + "<br>" + "<br>")


// fullName = fullName.toUpperCase()
// document.write(fullName + "<br>" + "<br>")


// fullName = fullName.slice(2,4)
// document.write(fullName + "<br>" + "<br>")

// fullName = fullName.length
// // document.write(fullName + "<br>" + "<br>")

// var num1 = prompt("Enter your first number :")
// var num2 = prompt("Enter your first number :")

// num1 = parseInt(num1, 10)
// num2 = parseInt(num2, 10)

// var sum, sub, kol, mol

// sum = num1 + num2;
// document.write("Plus =" + sum + "<br>");


// sub = num1 - num2;
// document.write("Minus =" + sub + "<br>");

// kol = num1 * num2;
// document.write("intu =" + kol + "<br>");

// mol = num1 % num2;
// document.write("Parsent =" + mol);

//  var base =// parseInt(
//       prompt("Enter base :")//)
// var height =// parseInt(
//      prompt("Enter height :")//)

// area = base * height 

// document.write("Area = "+area+"<br>")



// var base = parseFloat(prompt("Enter base :"))
// var height = parseFloat(prompt("Enter height :"))

// area = base * height 

// document.write("Area = "+area+"<br>")

// var base = parseInt(prompt("Enter base :"))
// var height = parseInt(prompt("Enter height :"))

// area = base * height 

// document.write("Area = "+area+"<br>")

// var base = parseInt(prompt("Enter base :"))
// var height = parseInt(prompt("Enter height :"))

// area =(base * height)/2

// document.write("Area = "+area+"<br>")

//  var fern = parseFloat(prompt("Enter farn :"))

//  cels = (fern-32)*(5/9 ) 

//  document.write(cels)

var num = 5;

if (num % 2 == 0)
    console.log("Even");

else
    console.log("Odd");

// Task
var marks = prompt("Enter Your marks :")
if (marks > 100)
    console.log("Number invalid");
else if (marks >= 80 && marks <= 100)
    console.log("A+");
else if (marks >= 70 && marks <= 80)
    console.log("A");
else if (marks >= 60 && marks <= 70)
    console.log("A-");
else if (marks >= 50 && marks <= 60)
    console.log("B+");
else if (marks >= 40 && marks <= 50)
    console.log("C");
else if (marks >= 33 && marks <= 40)
    console.log("D");
else
    console.log("Fail")