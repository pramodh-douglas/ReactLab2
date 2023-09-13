
"use strict"; // stricter error handling - most react apps use this

// function declarations are hoisted but function expressions are not
// therefore i can call foo () before declaring
foo();
function foo() {
    var i = 10;
    {
        let j = 20;
    }

    console.log(i);
}

foo();

const pet = {
    name: "Oliver",
    age: 5,
    walk()  {
        console.log(this);
    }
}

//console.log(pet.name)
//console.log(pet["age"]);

pet.walk();

// bind creates another instance of the function walk where this refers to pet
// if bind function is not used, in strict mode, console log of function will return undeufined
// use bind to bind this to a object of choice
const outsideFunc = pet.walk.bind(pet);
console.log(outsideFunc);
outsideFunc();



/* ################################## */
// ####### Function Expression ##### //

// using default params
const sayGreeting = (name="Name", message="Hello World") => 
    console.log(`Hello ${name}, ${message}`);


sayGreeting("Jack", "Mesage.");
sayGreeting("Shane");

/* ################################## */
// ####### Arrow Expression ##### //

function area1(radius){
    return Math.PI * radius * radius;
}

const area2 = radius => {
    Math.PI * radius * radius;
}