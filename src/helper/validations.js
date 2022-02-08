import userFormRules from "./userFormRules";

export const validateName = (event, name, value) => {
  const filteredValidation = userFormRules.filter(
    validation =>
      validation.inputName === name && validation.validateOn === event
  );
  const nameMinLength = filteredValidation[0].rules.filter(
    rule => rule.type === "minLength"
  );
  const nameMaxLength = filteredValidation[0].rules.filter(
    rule => rule.type === "maxLength"
  );

  if (value.trim() === "") {
    const isRequired = filteredValidation[0].rules.filter(
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
  const filteredValidation = userFormRules.filter(
    validation =>
      validation.inputName === name && validation.validateOn === event
  );
  const formatRequired = filteredValidation[0].rules.filter(
    rule => rule.type === "emailFormat"
  );

  if (value.trim() === "") {
    const isRequired = filteredValidation[0].rules.filter(
      rule => rule.type === "required"
    );
    return { id: Math.random(), inputField: name, ...isRequired[0] };
  }
  if (!regEx.exec(value)) {
    return { id: Math.random(), inputField: name, ...formatRequired[0] };
  }
  return {};
};

export const validateGender = (event, name, value) => {
  const filteredValidation = userFormRules.filter(
    validation =>
      validation.inputName === name && validation.validateOn === event
  );

  if (value === "select") {
    const isRequired = filteredValidation[0].rules.filter(
      rule => rule.type === "required"
    );

    return { id: Math.random(), inputField: name, ...isRequired[0] };
  }
  return {};
};

export const validateAge = (event, name, value) => {
  const filteredValidation = userFormRules.filter(
    validation =>
      validation.inputName === name && validation.validateOn === event
  );
  const minAge = filteredValidation[0].rules.filter(
    rule => rule.type === "min"
  );
  const maxAge = filteredValidation[0].rules.filter(
    rule => rule.type === "max"
  );

  if (value.trim() === "") {
    const isRequired = filteredValidation[0].rules.filter(
      rule => rule.type === "required"
    );
    return {
      id: Math.random(),
      inputField: name,
      ...isRequired[0],
    };
  }
  if (value < minAge[0].value) {
    return { id: Math.random(), inputField: name, ...minAge[0] };
  }
  if (value > maxAge[0].value) {
    return { id: Math.random(), inputField: name, ...maxAge[0] };
  }
  return {};
};
