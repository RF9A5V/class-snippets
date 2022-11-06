import logo from './logo.svg';
import './App.css';

import DrinkListWithClasses from './components/DrinksWithClasses';
import DrinkListWithHooks from './components/DrinksWithHooks';

const appStyle = {
  display: "flex",
}

function App() {
  return (
    <div className="App" style={appStyle}>
      <DrinkListWithHooks />
      <DrinkListWithClasses />
    </div>
  );
}

export default App;
