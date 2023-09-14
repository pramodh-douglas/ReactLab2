const car = {
    color: "Red",
    year : "2023",
    type: "SUV",
    make: "Honda",
    features: {
        brakingSys : "ABS",
        drive: "AWD"
    }
}

// extracting properties and giving alias myColor
let {color:myColor, type} = car;

myColor = "White";
console.log(myColor, car.color);

// incoming function arguments
// entire car obj is passed as an arg, and then only the property needed is used
const myFunction = ({color:c, features: {drive:d}}) => console.log(`Color of my car is ${c} and drive is ${d}`);

myFunction(car);

// array destructuring

// will extract the first element and fourth
let [first,,,fourth] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

console.log(first, fourth);

// Spread Operator
// first use to combine two arrays
// second use to clone an array
// third use get remaining items in the array
// fourth use - collect function arguments as an array

let colors = ["red", "blue", "green"];
let fruits = ["apple", "blueberries", "oranges"];

let newArr = [...colors, ...fruits];
console.log(newArr);

