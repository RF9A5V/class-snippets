// import Car from "./Car.js";
const Car = require("./Car");
const Truck = require("./Truck");

// Creating a new instance of a car, with a company, a model, and a color.
const myCar = new Car("Toyota", "Prius", "silver");

// Creating a new instance of a car, with just the company and everything else
// undefined.
const emptyCar = new Car("Honda");

// We should have a color for myCar because we defined it with a color
console.log(myCar.getColor());
// We should have a company for emptyCar because we defined it with a company
console.log(emptyCar.getCompany());
// We should NOT have a color for emptyCar because we did not provide it one
console.log(emptyCar.getColor());

// We create a new truck with the expected car params, plus a specific truck
// param for the weight capacity
const myTruck = new Truck("Ford", "F-150", "green", 3000);

// getFullDetails is overwritten in the Truck class definition, so we're calling
// the Truck version of getFullDetails
console.log(myTruck.getFullDetails());
// console.log(myCar.getWeightCapacity());

const dealership = [
  new Car("Toyota", "Prius", "gold"),
  new Car("Nissan", "Ultima", "purple"),
  new Truck("Ford", "F2000", "blue"),
];

// Because Truck extends from Car, and has access to the same methods,
// we can just do the Car method on each item in the dealership and
// expect the correct values back
dealership.forEach(vehicle => {
  console.log(vehicle.getFullDetails());
})