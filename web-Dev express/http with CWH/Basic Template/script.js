// exercise fulty cal

/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times


let random = Math.random()
console.log(random)
let a = prompt("Enter first number")
let c = prompt("Enter operation")
let b = prompt("Enter second number")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}


if (random > 0.1) {
    // Perform correct calculation
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    
}

else {
    // Perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 

}
*/


// business name generator
/**
 * 
let rand = Math.random()
let first,sec,third

// for first name
if(rand>=0.33){
    first= "crazy"
}
else if(rand<0.66 && rand >=0.33){
    first="amazing"
}
else{
    first= "wow"
}

// do same for sec and third 
// At end print word
 */

// fact using reduce and for loop
/**
 * 
let number = 7;

function fact(number) {
    let res = 1;
    for (let i = 1; i <= number; i++) {
        res = res * i
    } return res;
} console.log(
    fact(number))
 */

// Given 5 boxes, Assign a random color and a random background to each box using DOM concepts
/**
 * 
let boxes = document.getElementsByClassName("box")
// let boxes = document.querySelector(".container").children 

function getRandomColor(){
    let val1 = Math.random() *255
    let val2 = Math.random() *255
    let val3 = Math.random() *255

    // let val1 = Math.ceil(0 + Math.random()* 255);
    // let val2 = Math.ceil(0 + Math.random()* 255);
    // let val3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})
 */

// card generator

function createCard(title, cName, views, monthsOld, duration, thumbnail){
    // Finish this function
}


createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
