// OBJECTS
let content_div = document.querySelector(".content_div");
content_div.setAttribute('class', 'content') 

function objects_intro() {
    content_div.innerHTML = ""
    let p1 = document.createElement("p");
    p1.innerText = '* Objects are non-primitive data types';
    p1.style.paddingTop = '20px'
    let p2 = document.createElement("p");
    p2.innerText = '* Object is an unordered collection of key-value pairs. Each key-value pair is called a property';
    let p3 = document.createElement("p");
    p3.innerText = '* Objects allows you to store multiple collections of data';
    let p4 = document.createElement("p");
    p4.innerText = '* To access a property, we can use: The dot notation: "obj.property"';
    let p5 = document.createElement("p");
    p5.innerText = '* Objects are non-primitive data types';
    p5.style.paddingBottom = '20px'

    content_div.appendChild(p1);
    content_div.appendChild(p2);
    content_div.appendChild(p3);
    content_div.appendChild(p4);
    content_div.appendChild(p5);
}
// ARRAYS

function arrays_intro() {
    content_div.innerHTML = ""
    let p1 = document.createElement("p");
    p1.innerText = '* An array is a set of elements of same data type represented by a single variable name';
    p1.style.paddingTop = '20px'
    let p2 = document.createElement("p");
    p2.innerText = '* Arrays  is a collection of items stored at contiguous memory locations';
    let p3 = document.createElement("p");
    p3.innerText = '* Arrays are index-based, the first element of the array start from 0 index';
    let p4 = document.createElement("p");
    p4.innerText = '* Arrays may-be onedimensional or multi-dimensional';
    let p5 = document.createElement("p");
    p5.innerText = '* The length property is always one more than the highest array index';
    p5.style.paddingBottom = '20px'

    console.log(content_div);
    content_div.appendChild(p1);
    content_div.appendChild(p2);
    content_div.appendChild(p3);
    content_div.appendChild(p4);
    content_div.appendChild(p5);
}
 
// STRINGS
function strings_intro() {
    content_div.innerHTML = ""
    let p1 = document.createElement("p");
    p1.innerText = '* Strings are primitive data types';
    p1.style.paddingTop = '20px'
    let p2 = document.createElement("p");
    p2.innerText = '* Strings are represented by arrays of characters';
    let p3 = document.createElement("p");
    p3.innerText = '* Strings can be enclosed within either single quotes, double quotes or backticks';
    let p4 = document.createElement("p");
    p4.innerText = '* The end of a string is marked with a special character, the null character';
    let p5 = document.createElement("p");
    p5.innerText = '* A string is converted to upper case with toUpperCase()';
    p5.style.paddingBottom = '20px'

    console.log(content_div);
    content_div.appendChild(p1);
    content_div.appendChild(p2);
    content_div.appendChild(p3);
    content_div.appendChild(p4);
    content_div.appendChild(p5);
}

// FUNCTIONS
function functions_intro() {
    content_div.innerHTML = ""
    let p1 = document.createElement("p");
    p1.innerText = '* Functions make efficient use of computer memory';
    p1.style.paddingTop = '20px'
    let p2 = document.createElement("p");
    p2.innerText = '* Functions are the main “building blocks” of the program.';
    let p3 = document.createElement("p");
    p3.innerText = '* A JavaScript function is executed when something invokes it (calls it).';
    let p4 = document.createElement("p");
    p4.innerText = '* A function is a self contained block of code that performs a particular task.';
    let p5 = document.createElement("p");
    p5.innerText = '* Functions are used to avoid rewriting if the same code.';
    p5.style.paddingBottom = '20px'

    console.log(content_div);
    content_div.appendChild(p1);
    content_div.appendChild(p2);
    content_div.appendChild(p3);
    content_div.appendChild(p4);
    content_div.appendChild(p5);
}

// NUMBERS
function numbers_intro() {
    content_div.innerHTML = ""

    let p1 = document.createElement("p");
    p1.innerText = '* Numbers are primitive data types';
    p1.style.paddingTop = '20px'
    let p2 = document.createElement("p");
    p2.innerText = '* The Number constructor contains constants and methods for working with numbers';
    let p3 = document.createElement("p");
    p3.innerText = '* Values of other types can be converted to numbers using the Number() function.';
    let p4 = document.createElement("p");
    p4.innerText = '* When used as a function, Number(value) converts a string or other value to th Number type. If the value cannot be converted, it returns NaN.';
    let p5 = document.createElement("p");
    p5.innerText = '* Number may also be expressed in literal forms like 0b101, 0o13, 0x0A.';
    p5.style.paddingBottom = '20px'

    content_div.appendChild(p1);
    content_div.appendChild(p2);
    content_div.appendChild(p3);
    content_div.appendChild(p4);
    content_div.appendChild(p5);
}

// NULL
function null_intro() {
    content_div.innerHTML = ""
    let p1 = document.createElement("p");
    p1.innerText = '* The value null is written with a literal: null';
    p1.style.paddingTop = '20px'
    let p2 = document.createElement("p");
    p2.innerText = '* The value null represents the intentional absence of any object value.';
    let p3 = document.createElement("p");
    p3.innerText = '* It is one of JavaScript primitive values and is treated as falsy for boolean operations.';
    let p4 = document.createElement("p");
    p4.innerText = '* Null expresses a lack of identification, indicating that a variable points to no object.';
    p4.style.paddingBottom = '20px'
   
    content_div.appendChild(p1);
    content_div.appendChild(p2);
    content_div.appendChild(p3);
    content_div.appendChild(p4);
}

//  UNDEFINED
function undefinedIntro() {
    content_div.innerHTML = ""
    let p1 = document.createElement("p");
    p1.innerText = '* Undefined is a primitive data types';
    p1.style.paddingTop = '20px'
    let p2 = document.createElement("p");
    p2.innerText = '* Undefined is a property of the global object';
    let p3 = document.createElement("p");
    p3.innerText = 'A variable that has not been assigned a value is of type undefined.';
    let p4 = document.createElement("p");
    p4.innerText = '* You can use undefined and the strict equality and inequality operators to determine whether a variable has a value.';
    p4.style.paddingBottom = '20px'
 
    content_div.appendChild(p1);
    content_div.appendChild(p2);
    content_div.appendChild(p3);
    content_div.appendChild(p4);

}
