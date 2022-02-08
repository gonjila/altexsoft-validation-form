const userFormRules = [
  {
    inputName: "name",
    rules: [
      { type: "required", message: "Field is required" },
      { type: "minLength", value: 3, message: "Enter few symbols" },
      { type: "maxLength", value: 99, message: "Max length is 99 symbols" },
    ],
    validateOn: "blur",
  },
  {
    inputName: "name",
    rules: [
      { type: "required", message: "(Submit) Field is required" },
      { type: "minLength", value: 3, message: "(Submit) Enter few symbols" },
      {
        type: "maxLength",
        value: 99,
        message: "(Submit) Max length is 99 symbols",
      },
    ],
    validateOn: "submit",
  },
  {
    inputName: "email",
    rules: [
      { type: "required", message: "Field is required" },
      { type: "email", message: "Incorrect format" },
    ],
    validateOn: "blur",
  },
  {
    inputName: "email",
    rules: [
      { type: "required", message: "(Submit) Field is required" },
      { type: "email", message: "(Submit) Incorrect format" },
    ],
    validateOn: "submit",
  },
  {
    inputName: "sex",
    rules: [{ type: "required", message: "Field is required" }],
    validateOn: "blur",
  },
  {
    inputName: "sex",
    rules: [{ type: "required", message: "(Submit) Field is required" }],
    validateOn: "submit",
  },
  {
    inputName: "age",
    rules: [
      { type: "required", message: "Field is required" },
      { type: "min", value: 18, message: "Too young!" },
      { type: "max", value: 99, message: "Oppps,sorry!" },
    ],
    validateOn: "blur",
  },
  {
    inputName: "age",
    rules: [
      { type: "required", message: "(Submit) Field is required" },
      { type: "min", value: 18, message: "(Submit) Too young!" },
      { type: "max", value: 99, message: "(Submit) Oppps,sorry!" },
    ],
    validateOn: "submit",
  },
];

export default userFormRules;
