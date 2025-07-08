import React, { createContext, useState } from "react";
import { storage } from "./storage";

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState(() => {
    const saveData = storage.get("data");
    console.log("storage>>", saveData);
    return saveData
      ? JSON.parse(saveData)
      : {
          name: "",
          age: "",
          email: "",
          gender: "",
          hobbies: [],
          country: "",
          subscribe: false,
        };
  });
  const [stepCount, setStepCount] = useState(0);
  console.log("formData>>>-----", formData);

  const updateForm = (newData, step) => {
    storage.set("data", JSON.stringify({ ...formData, ...newData }));
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const updateStep = (step) => {
    setStepCount(step);
  };

  return (
    <FormContext.Provider value={{ formData, updateForm, updateStep }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };
