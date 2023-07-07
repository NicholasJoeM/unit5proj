import React, { useState } from "react";
import Overview from "./Overview";
import Weather from "./Weather";
import Symbols from "./Symbols";

const MainDisplay = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="stack">
      <div className="tab-select">
        <button
          onClick={() => handleTabClick("Overview")}
          className={activeTab === "Overview" ? "active" : ""}
        >
          Overview
        </button>
        <button
          onClick={() => handleTabClick("Weather")}
          className={activeTab === "Weather" ? "active" : ""}
        >
          Current Weather at Capitol
        </button>
        <button
          onClick={() => handleTabClick("Symbols")}
          className={activeTab === "Symbols" ? "active" : ""}
        >
          Symbols
        </button>
      </div>
      {activeTab === "Overview" && <Overview />}
      {activeTab === "Weather" && <Weather />}
      {activeTab === "Symbols" && <Symbols />}
    </div>
  );
};

export default MainDisplay;
