// Closure is the scope created when a function is declared that allows the
// function to access and manipulate variables that are external to this function.
//
// In other words, closures allow a function to access all the variables, as well as other functions,
// that are in scope when the function itself is declared.

var outer = "Outer"; //Variable declared in global scope
var copy;

function outerFn() {
    // Function declared in global scope
    var inner = "Inner"; // Variable has function scope only, can not be
    // accessed from outside
    function innerFn() {
        // Inner function within Outer function,
        // both global context and outer
        // context are available hence can access
        // 'outer' and 'inner'
        console.log(outer);
        console.log(inner);
    }
    copy = innerFn; // Store reference to inner function,
    // because 'copy' itself is declared
    // in global context, it will be available
    // outside also
}
outerFn();
copy();
// Output: Outer
// Output: Inner

/// Example 2
var outer = "outer";
var copy;

function outerFn() {
    var inner = "inner";

    function innerFn(param) {
        console.log(outer);
        console.log(inner);
        console.log(param);
        console.log(magic);
    }
    copy = innerFn;
}
console.log(magic); //ERROR: magic not defined
var magic = "Magic";
outerFn();
copy("copy");