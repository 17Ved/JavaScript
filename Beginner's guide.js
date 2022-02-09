// In this file I've packed all basic requirement code for a beginner to understand JavaScript
// Lot of efforts has been taken to done this.
// In this file you'll find all the basic concepts of JS, that'll definitely help you to understand JS in better way.








// -------------------------------------------------------------------------------------------------------------------
console.log("Hello world");
console.log("Hello world", 9 + 14, "Another console dot log");
//alert("me");
// 1. write() The Document. write() method writes a string of text to a document stream opened by document.
document.write("This is document dot write");
// 2. The console. warn() method is used to write a warning message in the console.
console.warn("This is final warning");
// 3. The console. error() method in HTML is used to display an error message on the console. The console. error() method is used for testing purpose. The error message is sent as a parameter to the console.
console.error("This is error");
// 4. clear() The console. clear() method clears the console if the environment allows it.
console.clear();
// 5. assert() The console. assert() method writes an error message to the console if the assertion is false. If the assertion is true, nothing happens.
console.assert(4 == 6 - 2);

//----------------------------------------------------------------------------------------------------------------------

//JavaScript Variables --
// What are variables? -containers to store data values
var number1 = 34;
var number2 = 89;
console.log(number1 + number2);

// Datatypes in JavaScript:
// Numbers -
var num = 455;
var num2 = 56.44;

// String -
var str1 = "This is the string";
var str2 = "This is also the stirng";

// Objects -
var marks = {
  vedant: 45,
  jayesh: 233,
};

// Booleans -
var a = true;
var b = false;

// console.log(a, b);
// console.log(marks);

// Undefined Variable -  A variable that has not been assigned a value is of type undefined .
// A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value. A function returns undefined if a value was not returned.
var und = undefined;
// console.log(undefined);
// Or
// console.log(und)

// Null - Nothing
var n = null;
// console.log(n);

/*
At a very high level, there are two types of data types in Javascript--  
1. Primitive Data Types:- undefined, null, number, string, boolean, symbol
2. Reference Data Types:- Arrays and objects 
*/

// Arrays --
var arr = [1, 2, 3, "string", 4, 5]; // This is array
// array starts from zero
// you can also write string in array
// console.log(arr)

// Operators in Js-
var a = 76;
var b = 998;
console.log("The value of a + b ", a + b);
console.log("The value of a * b ", a * b);
console.log("The value of a - b ", a - b);
console.log("The value of a / b ", a / b);

// Assignment Operators --
var c = b;
console.log(c);
c += 5; // c = c + 2
c -= 5; // c = c -  2
c *= 5; // c = c * 2
c += 5; // c = c / 2
console.log(c);

// Comparison Operators--
var x = 35;
var y = 23;
console.log(x == y);
console.log(x <= y);
console.log(x >= y);
console.log(x != y);
console.log(x < y);
console.log(x > y);

// Logical Operators --  operates in boolean values
// AND Operators--
console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(false && true);

// OR operators--
console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(false || true);

// Logical Not --
console.log(!false);
console.log(!true);

// Funcitons in JS
// DRY principle in programming = Do not repeat yourself
function avg(a, b) {
  // a & b are arguments
  return (a + b) / 2;
}

c1 = avg(4, 6);
c2 = avg(23, 32);

console.log(c1, c2);

// Conditionals in JS

// var age = 74;
// Single if statement
// if (age > 18)
// {
//     console.log('You can drink');
// }
// else
// {
//     console.log("you can't drink");
// }

// if - else statement

// if (age > 18)
// {
//     console.log('You can drink');
// }
// else
// {
//     console.log("you can't drink");
// }

// if else ladder -

// var age = 61;

// if(age > 1)
// {
//     console.log("you are not a kid");
// }
// else if(age > 25)
// {
//     console.log("You're not kid anymore");
// }
// else if(age > 33)
// {
//     console.log("you're not young anymore");
// }
// else if(age > 60)
// {
//     console.log("You're getting old not");
// }
// else
// {
//     console.log("You're old now");
// }
// console.log("End of ladder");

// Loops in JS

// var arr = [1,2,3,4,5,6,7];
// for loop -->
// console.log(arr);
// for(var i = 0; i < arr.length, i++;)
// {
//     console.log(arr[i])
// }

// you can also iterate items in loop using 'for each' loop -->
// arr.forEach(function(element)
// {
//     console.log(element);
// })

// "let" in javascript --
// In JavaScript, let is a keyword that is used to declare a block scoped variable.
// Usually, the var keyword is used to declare a variable in JavaScript which is treated as a normal variable, but the variables declared using the let keyword are block scoped.

// let j = 0;
// const d = 0;
// d = d + 1;       // This line will throw this error -Uncaught TypeError: Assignment to constant variable
// d++;            // This line will throw this error -Uncaught TypeError: Assignment to constant variable

// while loop --->
// while loops checks condition first and then execute
// let j = 0;
// while(j<arr.length)
// {
//     console.log(arr[j]);
//     j++;
// }

// do while loop --->
// do while loop will execute at least once if condition if either true of false
// do
// {
//     console.log(arr[j]);
//     j++;
// }while(j<arr.length);

// break and continue statement --

// for(var i = 0; i < arr.length, i++;)
// {
//     if (i == 2)
//     {
//         break;
//         // continue;
//     }
//     console.log(arr[i])
// }

let myArr = ["Fan", "camera", 34, null, true];
// Array Methods

console.log(myArr.length); // return length of array

myArr.pop(); // last element will be removed after using this method (pop)
console.log(myArr);

myArr.push("Vedant"); // this method will push an entered element into your array
console.log(myArr);

myArr.shift(); // first element will be removed in the array
console.log(myArr);

myArr.unshift("vedant"); // will insert "vedant" in the array at starting
console.log(myArr);

// OR

console.log(myArr.unshift("vedant"));

// OR
const newlen = myArr.unshift("jay");
console.log(newlen); // print the new (updated) length of array
console.log(myArr);

// all array methods in Javascript -

// concat()	Joins two or more arrays, and returns a copy of the joined arrays
// copyWithin()	Copies array elements within the array, to and from specified positions
// entries()	Returns a key/value pair Array Iteration Object
// every()	Checks if every element in an array pass a test
// fill()	Fill the elements in an array with a static value
// filter()	Creates a new array with every element in an array that pass a test
// find()	Returns the value of the first element in an array that pass a test
// findIndex()	Returns the index of the first element in an array that pass a test
// forEach()	Calls a function for each array element
// from()	Creates an array from an object
// includes()	Check if an array contains the specified element
// indexOf()	Search the array for an element and returns its position
// isArray()	Checks whether an object is an array
// join()	Joins all elements of an array into a string
// keys()	Returns a Array Iteration Object, containing the keys of the original array
// lastIndexOf()	Search the array for an element, starting at the end, and returns its position
// map()	Creates a new array with the result of calling a function for each array element
// pop()	Removes the last element of an array, and returns that element
// push()	Adds new elements to the end of an array, and returns the new length
// reduce()	Reduce the values of an array to a single value (going left-to-right)
// reduceRight()	Reduce the values of an array to a single value (going right-to-left)
// reverse()	Reverses the order of the elements in an array
// shift()	Removes the first element of an array, and returns that element
// slice()	Selects a part of an array, and returns the new array
// some()	Checks if any of the elements in an array pass a test
// sort()	Sorts the elements of an array
// splice()	Adds/Removes elements from an array
// toString()	Converts an array to a string, and returns the result
// unshift()	Adds new elements to the beginning of an array, and returns the new length
// valueOf()	Returns the primitive value of an array

// All array properties in Javascript --
// constructor	Returns the function that created the Array object's prototype
// length	Sets or returns the number of elements in an array
// prototype	Allows you to add properties and methods to an Array object

// String Methods in Javascript --->

// charAt()	Returns the character at a specified index (position)
// charCodeAt()	Returns the Unicode of the character at a specified index
// concat()	Returns two or more joined strings
// endsWith()	Returns if a string ends with a specified value
// fromCharCode()	Returns Unicode values as characters
// includes()	Returns if a string contains a specified value
// indexOf()	Returns the index (position) of the first occurrence of a value in a string
// lastIndexOf()	Returns the index (position) of the last occurrence of a value in a string
// localeCompare()	Compares two strings in the current locale
// match()	Searches a string for a value, or a regular expression, and returns the matches
// repeat()	Returns a new string with a number of copies of a string
// replace()	Searches a string for a value, or a regular expression, and returns a string where the values are replaced
// search()	Searches a string for a value, or regular expression, and returns the index (position) of the match
// slice()	Extracts a part of a string and returns a new string
// split()	Splits a string into an array of substrings
// startsWith()	Checks whether a string begins with specified characters
// substr()	Extracts a number of characters from a string, from a start index (position)
// substring()	Extracts characters from a string, between two specified indices (positions)
// toLocaleLowerCase()	Returns a string converted to lowercase letters, using the host's locale
// toLocaleUpperCase()	Returns a string converted to uppercase letters, using the host's locale
// toLowerCase()	Returns a string converted to lowercase letters
// toString()	Returns a string or a string object as a string
// toUpperCase()	Returns a string converted to uppercase letters
// trim()	Returns a string with removed whitespaces
// valueOf()	Returns the primitive value of a string or a string object

let myLovelyString = "Vedant is a good boy";
console.log(myLovelyString.length);

console.log(myLovelyString.indexOf("Vedant"));
// indexof is used to return the index no of given string in array ---

console.log(myLovelyString.lastIndexOf("boy"));
// indexof is used to return the last index no of given string in array ---

console.log(myLovelyString.slice(0, 10));
// this method will slice the string in array, counting from index no. 0 to 3

d = myLovelyString.replace("Vedant", "Jay");
d = d.replace("Good", "Bad");

// console.log(d, myLovelyString)

// Dates in JavaScript

// Methohds -
// getFullYear()	Get the year as a four digit number (yyyy)
// getMonth()	Get the month as a number (0-11)
// getDate()	Get the day as a number (1-31)
// getHours()	Get the hour (0-23)
// getMinutes()	Get the minute (0-59)
// getSeconds()	Get the second (0-59)
// getMilliseconds()	Get the millisecond (0-999)
// getTime()	Get the time (milliseconds since January 1, 1970)
// getDay()	Get the weekday as a number (0-6)
// Date.now()	Get the time. ECMAScript 5.

let myDate = new Date(); // here new keyword is used for creating new date
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());

// ----------------------------------------------------------------------------------------------------
// DOM Manipulation in Javascript

// The HTML DOM (Document Object Model)
// When a web page is loaded, the browser creates a Document Object Model of the page.

// The HTML DOM model is constructed as a tree of Objects:

// With the object model, JavaScript gets all the power it needs to create dynamic HTML:

// JavaScript can change all the HTML elements in the page
// JavaScript can change all the HTML attributes in the page
// JavaScript can change all the CSS styles in the page
// JavaScript can remove existing HTML elements and attributes
// JavaScript can add new HTML elements and attributes
// JavaScript can react to all existing HTML events in the page
// JavaScript can create new HTML events in the page

// // What is HTML DOM?
// The HTML DOM is a standard object model and programming interface for HTML. It defines:

// The HTML elements as objects
// The properties of all HTML elements
// The methods to access all HTML elements
// The events for all HTML elements
// In other words: The HTML DOM is a standard for how to get, change, add, or delete HTML elements.

// for example --

document.getElementById("click").click;

document.getElementById("click").style.border = "red";

document.getElementById("click").style.border = "2px solid blue";

let elem = document.getElementById("click");
// console.log(elem);

let elemclass = document.getElementsByClassName("container");
// console.log(elemclass);
// elemclass[0].style.background = "Yellow";

elemclass[0].classList.add("bg-primary"); // used to add class

elemclass[0].classList.add("textsuccess");
// elemclass[0].classList.remove("textsuccess")

// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemclass[0].innerHTML);
// console.log(elemclass[0].innerText);

tn = document.getElementsByTagName("div");
console.log(tn);

createdElement = document.createElement("p");
createdElement.innerText = "This is a created para";
tn[0].appendChild(createdElement);

createdElement2 = document.createElement("b");
createdElement2.innerText = "This is a created para";
tn[0].replaceChild(createdElement2, createdElement);

// reoveChild(element) // remove an element

// Elements in JS

// // Finding HTML Elements
// document.getElementById(id)	Find an element by element id
// document.getElementsByTagName(name)	Find elements by tag name
// document.getElementsByClassName(name)	Find elements by class name

// // Changing HTML elements
// element.innerHTML =  new html content	Change the inner HTML of an element
// element.attribute = new value	Change the attribute value of an HTML element
// element.style.property = new style	Change the style of an HTML element

// Adding and Deleting HTML elements
// document.createElement(element)	Create an HTML element
// document.removeChild(element)	Remove an HTML element
// document.appendChild(element)	Add an HTML element
// document.replaceChild(new, old)	Replace an HTML element
// document.write(text)	Write into the HTML output stream

// Finding HTML objects
// document.anchors	Returns all <a> elements that have a name attribute	1
// document.applets	Deprecated	1
// document.baseURI	Returns the absolute base URI of the document	3
// document.body	Returns the <body> element	1
// document.cookie	Returns the document's cookie	1
// document.doctype	Returns the document's doctype	3
// document.documentElement	Returns the <html> element	3
// document.documentMode	Returns the mode used by the browser	3
// document.documentURI	Returns the URI of the document	3
// document.domain	Returns the domain name of the document server	1
// document.domConfig	Obsolete.	3
// document.embeds	Returns all <embed> elements	3
// document.forms	Returns all <form> elements	1
// document.head	Returns the <head> element	3
// document.images	Returns all <img> elements	1
// document.implementation	Returns the DOM implementation	3
// document.inputEncoding	Returns the document's encoding (character set)	3
// document.lastModified	Returns the date and time the document was updated	3
// document.links	Returns all <area> and <a> elements that have a href attribute	1
// document.readyState	Returns the (loading) status of the document	3
// document.referrer	Returns the URI of the referrer (the linking document)	1
// document.scripts	Returns all <script> elements	3
// document.strictErrorChecking	Returns if error checking is enforced	3
// document.title	Returns the <title> element	1
// document.URL	Returns the complete URL of the document	1

// selecting using Query
// The querySelector() method returns the first element that matches a CSS selector
// sel = document.querySelector('.container')
// console.log(sel);

// // The querySelector() method returns all elements that matches a CSS selector
// sel = document.querySelectorAll('.container')
// console.log(sel);

// Events in Javascript
// HTML events are "things" that happen to HTML elements.

// When JavaScript is used in HTML pages, JavaScript can "react" on these events.

// An HTML event can be something the browser does, or something a user does.

// Here are some examples of HTML events:

// An HTML web page has finished loading
// An HTML input field was changed
// An HTML button was clicked
// Often, when events happen, you may want to do something.

// JavaScript lets you execute code when events are detected.

// HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.

// Click Event in Js --->

// function clicked()
// {
//     console.log("The button was clicked")
// }

// // When page is refreshed/ loaded this event will get called --
// window.onload = function()
// {
//     console.log("The document was loaded")
// }

// firstContainer.addEventListener('click', function()
// {
//     console.log("Clicked inside container")
// })

// firstContainer.addEventListener('mouseover', function()
// {
//     console.log("Mouse on Container")
// })

// firstContainer.addEventListener('mouseout', function()
// {
//     console.log("Mouse outside of container");
// })

// firstContainer.addEventListener('mouseup', function()
// {
//     console.log("Mouse up when clicked on container");
// })

// firstContainer.addEventListener('mousedown', function()
// {
//     console.log("Mouse down when clicked on container");
// })

// firstContainer.addEventListener('click', function()
// {
//     document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked </b>"
//     console.log("Clicked on container")
// })

// let prevHTML =  document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function()
// {
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked on container");
// })

// firstContainer.addEventListener('mousedown', function()
// {
//     document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked </b>"
//     console.log("Mouse down when clicked on container");
// })

// SetTimeout and setinterval events in JS

// first understande arrow function
// you can define function in 2 ways.

// function summ (x, y)
// {
//     return x + y;
// }

//Or - u can define function as --

// summ = (a, b) =>
// {
//     return a + b;
// }

// SetTimeout--- // to shedule an event
// The window.setTimeout() method can be written without the window prefix.

// The first parameter is a function to be executed.

// The second parameter indicates the number of milliseconds before execution.

log = () => {
  // console.log("This will appear after 2 seconds")
};
// setTimeout(log, 2000);

// / To stop this intervals of set time out and set interval use -- clearTimeout()

// Setinterval ---
// The window.setInterval() method can be written without the window prefix.

// The first parameter is the function to be executed.

// The second parameter indicates the length of the time-interval between each execution.

// This example executes a function called "myTimer" once every second (like a digital watch).

// clr = setInterval(log, 2000);

// To stop this intervals of set time out and set interval use -- clearInterval()

// Javascript Local storage --

// The localStorage object allows you to save key/value pairs in the browser.

// The localStorage object stores data with no expiration date.

// The data is not deleted when the browser is closed, and are available for future sessions.

// localStorage.setItem("lastname", "Smith");
// localStorage.getItem("lastname");

// localStorage
// localStorage.setItem('name', 'Vedant')
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear('name')

// JSON -
// JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax.
//  It is commonly used for transmitting data in web applications

// To know the datatype of variable use --- typeof

obj = { name: "ved", length: 1, a: { this: "that" } };
jso = JSON.stringify(typeof obj);
console.log(jso);
console.log(typeof jso);

// you can write string in `` - backticks
parsed = JSON.parse(`{"name": "ved", "length": 1, "a": {"this": "that"}}`);
console.log(parsed);

// Template Literals - Backticks

a = 17;
console.log(`this is my ${a}`);
