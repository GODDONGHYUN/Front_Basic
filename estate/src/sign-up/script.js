const onIdInputHandler = (event) => {
  const value = event.target.value;
  const checkDuplicateButtonElement = document.getElementById(
    "check-duplicate-button"
  );
  if (value) checkDuplicateButtonElement.className = "input-primary-button";
  else checkDuplicateButtonElement.className = "input-disable-button";
};

const idInputElement = document.getElementById("id");
idInputElement.addEventListener("input", onIdInputHandler);

const onEmailInputHandler = (event) => {
  const value = event.target.value;
  const checkEmailButtonElement = document.getElementById("check-email-button");
  if (value) checkEmailButtonElement.className = "input-primary-button";
  else checkEmailButtonElement.className = "input-disable-button";
};

const emailInputElement = document.getElementById("email");
emailInputElement.addEventListener("input", onEmailInputHandler);

const onAuthNumberInputHandler = (event) => {
  const value = event.target.value;
  const checkAuthNumberButtonElement = document.getElementById(
    "check-auth-number-button"
  );
  if (value) checkAuthNumberButtonElement.className = "input-primary-button";
  else checkAuthNumberButtonElement.className = "input-disable-button";
};

const authNumberElement = document.getElementById("auth");
authNumberElement.addEventListener("input", onAuthNumberInputHandler);
