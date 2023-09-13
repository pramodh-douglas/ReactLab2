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