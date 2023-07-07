import React from "react";
import { useSelector } from "react-redux";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
import { selectPotentials } from "./redux/slices/potentialCountriesSlice";
import { selectDisplay } from "./redux/slices/displayCountrySlice";

import "./App.css";

const App = () => {
  const potentials = useSelector(selectPotentials);
  const currentDisplay = useSelector(selectDisplay);

  console.log(potentials);
  console.log("DISPLAY", currentDisplay);

  return (
    <div className="App font-link">
      <Header />
      {currentDisplay ? <MainDisplay /> : <OptionDisplay />}
    </div>
  );
};

export default App;
