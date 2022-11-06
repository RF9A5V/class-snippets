// We make a drink list with hooks here

import { useEffect, useState } from "react";

const DrinkListWithHooks = function() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    // We get our data here
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then(response => response.json())
      .then(data => setDrinks(data.drinks))
  }, []);

  useEffect(() => {
    console.log("drinks have changed");
  }, [drinks.length])

  function deleteDrink() {
    drinks.pop();
    setDrinks([...drinks]);
  }

  return (
    <div>
      {
        drinks.map(drink => (
          <div>
            { drink.strDrink }
          </div>
        ))
      }
      <button onClick={deleteDrink}>Content</button>
    </div>
  )
}

export default DrinkListWithHooks;