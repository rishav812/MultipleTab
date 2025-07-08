import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { FormContext } from "../formContext";

function TabForm({ tabs }) {
  const { updateStep } = useContext(FormContext);
  const [activeTab, setActiveTab] = useState(0);
  const ActiveComponent = tabs[activeTab].Component;
  return (
    <div>
      {tabs && (
        <div className="main-container">
          <div className="header-container">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className="header"
                onClick={() => {
                  updateStep(index);
                  setActiveTab(index);
                }}
              >
                {tab.name}
              </div>
            ))}
          </div>
          <div className="div-component">
            {ActiveComponent && (
              <ActiveComponent
                onNext={() => {
                  // updateStep(index);
                  setActiveTab((prev) => prev + 1);
                }}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default TabForm;
