import { useState } from "react";

import "./App.css";
import UserForm from "./components/UserForm";

function App() {
  const [validationErrors, setValidationErrors] = useState([]);

  return (
    <div className="App">
      <div className="formWrapper">
        <h1>React Form</h1>

        <UserForm
          validationErrors={validationErrors}
          setValidationErrors={setValidationErrors}
        />

        <div className="errorWrapper">
          {validationErrors.map(error => {
            if (error !== null) {
              return (
                <span key={error?.id} className="error_message">
                  <strong>{error?.inputField}</strong> - {error?.message}
                </span>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
