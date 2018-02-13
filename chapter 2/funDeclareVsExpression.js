// Function expression
// No hoisting
functionOne();
//Error
//"TypeError: functionOne is not a function
var functionOne = function() {
    console.log("functionOne");
};
//////////////////////////////////////////////////////
// Function declaration
// Hoisted
functionTwo();
//No error
//Prints - functionTwo
function functionTwo() {
    console.log("functionTwo");
}