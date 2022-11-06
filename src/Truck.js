const Car = require("./Car");

class Truck extends Car {
  constructor(company, model, color, weightCapacity) {
    super(company, model, color);
    this.weightCapacity = weightCapacity;
  }

  getWeightCapacity() {
    return this.weightCapacity;
  }

  getFullDetails() {
    return super.getFullDetails() + ", Capacity: " + this.getWeightCapacity();
  }
}

module.exports = Truck;