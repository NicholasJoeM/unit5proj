import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Symbols = () => {
  const currentDisplay = useSelector(selectDisplay);

  const renderImage = (data, altText) => {
    return data ? <img src={data} alt={altText} /> : "(No Data Found)";
  };

  return (
    <div className="symbols">
      <div className="stack">
        <h2>Flag of {currentDisplay.name.common}:</h2>
        {renderImage(currentDisplay.flags?.png, "Flag")}
      </div>
      <div className="stack">
        <h2>Coat of Arms of {currentDisplay.name.common}:</h2>
        {renderImage(currentDisplay.coatOfArms?.png, "Coat of Arms")}
      </div>
    </div>
  );
};

export default Symbols;
