// FIXME "eslint-disable" წასაშლელია
/* eslint-disable no-console */
import { useState } from "react";

import "./App.css";
import UserForm from "./components/UserForm";

function App() {
  const [validationErrors, setValidationErrors] = useState([]);

  // console.log("validationErrors", validationErrors);

  const setValidateErrorsFunction = (inputField, rule) => {
    // TODO if an error already exists in the array then nothing should happen
    setValidationErrors(errors => [
      ...errors,
      {
        id: Math.random(),
        inputField,
        type: rule.type,
        message: rule.message,
      },
    ]);
  };

  return (
    <div className="App">
      <div className="formWrapper">
        <h1>React Form</h1>

        <UserForm setValidationErrors={setValidateErrorsFunction} />

        <div className="errorWrapper">
          {validationErrors.map(error => {
            return (
              <span key={error.id} className="error_message">
                <strong>{error.inputField}</strong> - {error.message}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
