import { useRef } from "react";

import "./UserForm.css";
import {
  validateName,
  validateEmail,
  validateGender,
  validateAge,
} from "../helper/validations";

function UserForm({ validationErrors, setValidationErrors }) {
  const nameRef = useRef();
  const emailRef = useRef();
  const genderRef = useRef();
  const ageRef = useRef();

  const onFormSubmit = e => {
    e.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredGender = genderRef.current.value;
    const enteredAge = ageRef.current.value;

    const nameValidation = validateName(
      "submit",
      nameRef.current.name,
      enteredName
    );

    const emailValidation = validateEmail(
      "submit",
      emailRef.current.name,
      enteredEmail
    );

    const GenderValidation = validateGender(
      "submit",
      genderRef.current.name,
      enteredGender
    );

    const ageValidation = validateAge(
      "submit",
      ageRef.current.name,
      enteredAge
    );

    const submitValidations = [
      nameValidation,
      emailValidation,
      GenderValidation,
      ageValidation,
    ];

    setValidationErrors(submitValidations);
  };

  const onInputBlur = () => {
    const nameValidation = validateName(
      "blur",
      nameRef.current.name,
      nameRef.current.value
    );

    const emailValidation = validateEmail(
      "blur",
      emailRef.current.name,
      emailRef.current.value
    );

    const GenderValidation = validateGender(
      "blur",
      genderRef.current.name,
      genderRef.current.value
    );

    const ageValidation = validateAge(
      "blur",
      ageRef.current.name,
      ageRef.current.value
    );

    const blurValidations = [
      nameValidation,
      emailValidation,
      GenderValidation,
      ageValidation,
    ];

    setValidationErrors(blurValidations);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Name"
        ref={nameRef}
        onBlur={onInputBlur}
      />

      <input
        name="email"
        type="text"
        placeholder="Email"
        ref={emailRef}
        onBlur={onInputBlur}
      />

      <select
        name="gender"
        id="browsers"
        defaultValue="select"
        ref={genderRef}
        onBlur={onInputBlur}
      >
        <option value="select">Select sex</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <input
        name="age"
        type="number"
        placeholder="Age"
        ref={ageRef}
        onBlur={onInputBlur}
      />

      <button
        type="submit"
        disabled={
          validationErrors[0] ||
          validationErrors[1] ||
          validationErrors[2] ||
          validationErrors[3]
        }
      >
        click me
      </button>
    </form>
  );
}

export default UserForm;
