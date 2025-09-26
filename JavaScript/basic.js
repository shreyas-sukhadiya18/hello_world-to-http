
// variables
var myname = "shreyash"

console.log(myname)

// intializing numbers in js
// var names are case-sentitive 
// basic math
// basic substraction
//  divide, increment/ decrement  number
// decimal number


// escape sequence just like other pro language
// concate string  with +
// and also conacate str with += operator
var name = "helo";
name += " hello"
console.log(name)

// concate with variable
// find length with length operator
var name = "shreyas"
name2 = name.length
console.log(name2)

// bracket notation (start index with 0.)

// string are immutable --> means latters are not changeble while notation
var srt = "jello "
srt[0] = "H" // In this srt is still jello
srt = "Hello"
console.log(srt)  // Hello


// find the last of the string "-1"

// word blanks (function)
function mywords(myName,surname,lastname){
    var result ="";
    result += "Hallo " + myName +" is " +surname +lastname

    // print result
    return result;
}
console.log(mywords("shreyas", "suk","p.")) //hallo shreays is sukp
console.log(mywords("Hell","the","Fire")) //hallo hell is thefire


// Arrays 1d-2d-3d
// How to access arrays
// same as notation
// modify arrays with index
var myarr = [1,2,3]
myarr[1] = 34;  // [1,34,3]