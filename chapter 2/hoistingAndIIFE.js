var output = console.log;

// Known as hoisting
a = 1;
var a;
output(a); // Output: 1

// Self invoking function or
// Immediately Invoked Function Expression(IIFE)
(function foo() {
    a = 1;
    var a;
    output(a); // Output: 1
})();