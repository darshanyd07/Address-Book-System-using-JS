const nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
const addressRegex = RegExp("^[a-zA-z0-9#,]{4,}$");
const cityStateRegex = RegExp("^[a-zA-z]{4,}$");
const zipRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");
const phoneNumberRegex = RegExp("^[0-9]{2}[-]{1}[0-9]{10}$");
const emailRegex = RegExp(
  "^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$"
);
