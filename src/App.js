// FIXME "eslint-disable" წასაშლელია
/* eslint-disable no-console */
import { useState } from "react";

import "./App.css";
import UserForm from "./components/UserForm";

function App() {
  const [validationErrors, setValidationErrors] = useState([]);

  // console.log("validationErrors", validationErrors);

  const setValidateErrorsFunction = (inputField, rule) => {
    setValidationErrors(errors => {
      return [
        ...errors,
        {
          id: Math.random(),
          inputField,
          type: rule.type,
          message: rule.message,
        },
      ];
    });
  };

  const deleteValidationErrorFunction = (inputField, type) => {
    setValidationErrors(errors => {
      const errorIndex = errors.findIndex(
        error => error.inputField === inputField && error.type === type
      );

      console.log(errorIndex);

      return [...errors.splice(0, errorIndex), ...errors.splice(errorIndex)];
    });
  };

  console.log(validationErrors);

  return (
    <div className="App">
      <div className="formWrapper">
        <h1>React Form</h1>

        <UserForm
          validationErrors={validationErrors}
          setValidationErrors={setValidateErrorsFunction}
          deleteValidationError={deleteValidationErrorFunction}
        />

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
