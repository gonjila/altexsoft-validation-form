// FIXME "eslint-disable" წასაშლელია
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { useRef } from "react";

import "./UserForm.css";
import userFormRules from "../helper/userFormRules";

function UserForm({ setValidationErrors }) {
  const nameRef = useRef();
  const emailRef = useRef();
  const browser = useRef();
  const ageRef = useRef();

  const onFormSubmit = e => {
    e.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredBrowser = browser.current.value;
    const enteredAge = ageRef.current.value;

    console.log(enteredName, enteredEmail, enteredBrowser, enteredAge);
  };

  const onInputBlur = event => {
    const filteredRules = userFormRules.filter(
      rule => rule.inputName === event.target.name && rule.validateOn === "blur"
    );

    filteredRules[0].rules.map(rule => {
      if (event.target.value.trim() === "" && rule.type === "required") {
        setValidationErrors(event.target.name, rule);
      }

      if (event.target.name === "name") {
        if (
          rule.type === "minLength" &&
          event.target.value.length < rule.value
        ) {
          setValidationErrors(event.target.name, rule);
        } else if (
          rule.type === "maxLength" &&
          event.target.value.length > rule.value
        ) {
          setValidationErrors(event.target.name, rule);
        }
      }

      if (event.target.name === "email" && rule.type === "email") {
        const regEx = /^[\w-.0-9]+@([\w-]+\.)+[\w-]{2,4}$/g;

        if (!regEx.exec(emailRef.current.value)) {
          setValidationErrors(event.target.name, rule);
        }
      }

      if (event.target.name === "sex" && event.target.value === "select") {
        setValidationErrors(event.target.name, rule);
      }

      if (event.target.name === "age") {
        if (event.target.value < rule.value && rule.type === "min") {
          setValidationErrors(event.target.name, rule);
        } else if (event.target.value > rule.value && rule.type === "max") {
          setValidationErrors(event.target.name, rule);
        }
      }
    });
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
        type="email"
        placeholder="Email"
        ref={emailRef}
        onBlur={onInputBlur}
      />

      <select
        name="sex"
        id="browsers"
        defaultValue="select"
        ref={browser}
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

      <button type="submit" disabled={false}>
        click me
      </button>
    </form>
  );
}

export default UserForm;
