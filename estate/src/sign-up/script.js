const ID = "useridentity";
const PASSWORD = "P!ssw0rd";
const EMAIL = "email@email.com";
const AUTH_NUMBER = "1010";

const idInputElement = document.getElementById("id");
const emailInputElement = document.getElementById("email");
const authNumberElement = document.getElementById("auth");
const checkDuplicateButtonElement = document.getElementById(
  "check-duplicate-button"
);
const checkEmailButtonElement = document.getElementById("check-email-button");
const authNumberButtonElement = document.getElementById(
  "check-auth-number-button"
);
const idMessageElement = document.getElementById("id-message");
const emailMessageElement = document.getElementById("email-message");
const authNumberMessageElement = document.getElementById("auth-number-message");

const onIdInputHandler = (event) => {
  const value = event.target.value;
  if (value) checkDuplicateButtonElement.className = "input-primary-button";
  else checkDuplicateButtonElement.className = "input-disable-button";
};

idInputElement.addEventListener("input", onIdInputHandler);

const onEmailInputHandler = (event) => {
  const value = event.target.value;
  if (value) checkEmailButtonElement.className = "input-primary-button";
  else checkEmailButtonElement.className = "input-disable-button";
};

emailInputElement.addEventListener("input", onEmailInputHandler);

const onAuthNumberInputHandler = (event) => {
  const value = event.target.value;
  if (value) authNumberButtonElement.className = "input-primary-button";
  else authNumberButtonElement.className = "input-disable-button";
};

authNumberElement.addEventListener("input", onAuthNumberInputHandler);

const onCheckDuplicateClickHandler = (event) => {
  const idValue = idInputElement.value;
  if (!idValue) return;
  const isDuplicate = idValue === ID;
  if (isDuplicate) {
    idMessageElement.className = "input-message error";
    idMessageElement.textContent = "아이디가 이미 사용 중입니다.";
  } else {
    idMessageElement.className = "input-message primary";
    idMessageElement.textContent = "사용가능한 아이디 입니다.";
  }
};

const onCheckEmailClickHandler = (event) => {
  const emailValue = emailInputElement.value;
  if (!emailValue) return;
  const emailReg = /^[a-zA-Z0-9]*@([-.]?[a-zA-Z0-9])*\.[a-zA-Z]{2,4}$/;
  const isEmail = emailReg.test(emailValue);

  if (!isEmail) {
    emailMessageElement.className = "input-message error";
    emailMessageElement.textContent = "이메일 형식이 아닙니다.";
    return;
  }

  const isDuplicateEmail = emailValue === EMAIL;
  if (isDuplicateEmail) {
    emailMessageElement.className = "input-message error";
    emailMessageElement.textContent = "이미 사용중인 이메일 입니다.";
    return;
  }

  emailMessageElement.className = "input-message primary";
  emailInputElement.textContent = "인증번호가 전송 되었습니다.";
};

const onCheckAuthNumberClickHandler = (event) => {
  const authNumberValue = authNumberElement.value;
  if (!authNumberValue) return;

  const isEqualAuthNumber = authNumberValue === AUTH_NUMBER;
  if (isEqualAuthNumber) {
    authNumberMessageElement.className = "input-message primary";
    authNumberMessageElement.textContent = "인증번호가 확인 되었습니다.";
  } else {
    authNumberMessageElement.className = "input-message error";
    authNumberMessageElement.textContent = "인증번호가 일치하지 않습니다.";
  }
};

checkDuplicateButtonElement.addEventListener(
  "click",
  onCheckDuplicateClickHandler
);
checkEmailButtonElement.addEventListener("click", onCheckEmailClickHandler);
authNumberButtonElement.addEventListener(
  "click",
  onCheckAuthNumberClickHandler
);

const onSignInLinkClickHandler = (event) => {
  window.location.href = "../sign-in";
};

const signInLinkElement = document.getElementById("sign-in-link");
signInLinkElement.addEventListener("click", onSignInLinkClickHandler);
