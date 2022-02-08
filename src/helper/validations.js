import userFormRules from "./userFormRules";

// მიიღოს რაღაც მონაცემები და დააბრუნოს {}
export const validateName = (event, name, value) => {
  console.log("event", event, "value", value);

  const filterdValidation = userFormRules.filter(
    validation =>
      validation.inputName === name && validation.validateOn === event
  );
  const nameMinLength = filterdValidation[0].rules.filter(
    rule => rule.type === "minLength"
  );
  const nameMaxLength = filterdValidation[0].rules.filter(
    rule => rule.type === "maxLength"
  );

  if (value.trim() === "") {
    const isRequired = filterdValidation[0].rules.filter(
      rule => rule.type === "required"
    );

    return {
      id: Math.random(),
      inputField: name,
      ...isRequired[0],
    };
  }

  if (value.length < nameMinLength[0].value) {
    return {
      id: Math.random(),
      inputField: name,
      ...nameMinLength[0],
    };
  }

  if (value.length < nameMaxLength[0].value) {
    return {
      id: Math.random(),
      inputField: name,
      ...nameMaxLength[0],
    };
  }

  return {};
};
