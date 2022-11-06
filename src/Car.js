class Car {

  // A constructor defines what params are expected for a new instance of a
  // class. By using the this keyword, we save those values from our params
  // to our actual instance, then we can access the instance values by using
  // the this keyword.
  constructor(company, model, color) {
    this.company = company;
    this.model = model;
    this.color = color;
  }

  // This is what we call a method. A method is a function that's attached to
  // an instance of a class. A method can be used to access details related
  // to the instance of a class.
  getCompany() {
    return this.company;
  }

  getModel() {
    return this.model;
  }

  getColor() {
    return this.color;
  }

  getFullDetails() {
    return `${this.getCompany()} ${this.getModel()} - ${this.getColor()}`;
  }
}

module.exports = Car;