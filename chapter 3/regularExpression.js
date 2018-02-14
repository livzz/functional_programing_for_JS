var pattern = /test/;
// RegEx literals are delimited using forward slashes.Alternatively, we could construct
// a RegExp instance, passing the RegEx as a string:
var pattern = new RegExp("test");
// Both of these formats result in the same RegEx being created in the variable pattern.
// In addition to the expression itself, there are three flags that can be associated with a RegEx:
//  •i: This makes the RegEx case -insensitive.
//  •g: This matches all the instances of the pattern as opposed to the default of local.
//  •m: This allows matches across multiple lines that might be obtained from the value of a textarea element.

// These flags are appended to the end of the literal( for example, /test/ig) or passed in a string as the second parameter to the RegExp constructor(
// new RegExp("test","ig")
var pattern = /orange/;
console.log(pattern.test("orange")); // true
var patternIgnoreCase = /orange/i;
console.log(patternIgnoreCase.test("Orange")); // true
var patternGlobal = /orange/gi;
console.log(patternGlobal.test("Orange Juice")); // true

///////////////////**************/////////////////////////

// Notation     Meaning
//      \d      Any digit character
//      \w      An alphanumeric character (word character)
//      \s      Any whitespace character (space, tab, newline, and similar)
//      \D      A character that is not a digit
//      \W      A non-alphanumeric character
//      \S      A non-whitespace character
//      .       Any character except for newline
var strToMatch = "123-456-7890";
var re = /[0-9][0-9][0-9]-[0-9][0-9][0-9]/;
var arrMatches = strToMatch.match(re);
console.log(arrMatches);
//["123-456"]
////////  can also be writen as   ////////////
var strToMatch = "123-456-7890";
var re = /\d\d\d-\d\d\d/;
var arrMatches = strToMatch.match(re);
console.log(arrMatches);
//["123-456"]

//////////////////////////////////////////////////

// The following table lists the various repetition quantifiers:
//      ?   :  Either 0 or 1 occurrence (marks the occurrence as optional)
//      *   :  0 or more occurrences
//      +   :  1 or more occurrences
//     {n}  :       Exactly n occurrences
//    {n,m} :  Occurrences between n and m
//    {n,}  :      At least an n occurrence
//    {,n}  :   0 to n occurrences

var str = /behaviou?r/;
console.log(str.test("behaviour"));
// true
console.log(str.test("behavior"));
// true

//////////////////////////////////////////////////////

// TODO