// We make a drinks list with classes here

import { Component } from "react";

// We create a new class called DrinkListWithClasses that builds on top of the
// existing base Component from React. We do this so that when we use the class
// as a component somewhere else, it still has the same functionality as the built
// in React Component. Basically, we need to extend Component in order for our
// new class to actually be a Component.
class DrinkListWithClasses extends Component {

  // The constructor() function here is special in that it defines what props or
  // arguments are needed for this class. The constructor function isn't limited to
  // just React, it applies for all classes. But we use this to determine what params
  // should get passed to any new instance of this class.
  constructor(props) {
    super(props);
    this.state = {
      drinks: [],
    };

    this.deleteDrink = this.deleteDrink.bind(this);
  }

  componentDidMount() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then(response => response.json())
      .then(data => this.setState({drinks: data.drinks}))
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.drinks.length, this.state.drinks.length);
  }

  deleteDrink() {
    const nextDrinks = this.state.drinks.slice(0, this.state.drinks.length);
    this.setState({
      drinks: [...nextDrinks],
    })
  }

  render() {
    return (
      <div>
        {
          this.state.drinks.map(drink => (
            <div>
              { drink.strDrink }
            </div>
          ))
        }
        <button onClick={this.deleteDrink}>Content</button>
      </div>
    )
  }
}

export default DrinkListWithClasses;