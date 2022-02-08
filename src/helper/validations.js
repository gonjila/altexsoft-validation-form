import userFormRules from "./userFormRules";

export const validateName = (event, name, value) => {
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

export const validateEmail = (event, name, value) => {
  const regEx = /^[\w-.0-9]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const filterdValidation = userFormRules.filter(
    validation =>
      validation.inputName === name && validation.validateOn === event
  );
  const formatRequired = filterdValidation[0].rules.filter(
    rule => rule.type === "emailFormat"
  );

  if (value.trim() === "") {
    const isRequired = filterdValidation[0].rules.filter(
      rule => rule.type === "required"
    );
    return { id: Math.random(), inputField: name, ...isRequired[0] };
  }
  if (!regEx.exec(value)) {
    return { id: Math.random(), inputField: name, ...formatRequired[0] };
  }
  return {};
};
