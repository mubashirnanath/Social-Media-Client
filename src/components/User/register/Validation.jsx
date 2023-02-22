export const showpassword = (passwordShown, setPasswordShown) => {
  if (passwordShown) {
    setPasswordShown(false);
  } else {
    setPasswordShown(true);
  }
};

export const showRepeatpassword = (
  RepeatpasswordShown,
  setRepeatPasswordShown,
) => {
  if (RepeatpasswordShown) {
    setRepeatPasswordShown(false);
  } else {
    setRepeatPasswordShown(true);
  }
};
export const namechangeHandler = (event, setEnteredName) => {
  setEnteredName(event.target.value);
};
export const emailchangeHandler = (event, setEnteredEmail) => {
  setEnteredEmail(event.target.value);
};
export const dobChangeHandler = (event, setEnteredUserName) => {
  setEnteredUserName(event.target.value);
};

export const phoneNoChangeHandler = (event, setenteredPhoneNo) => {
  setenteredPhoneNo(event.target.value);
};

export const passwordChangeHandler = (event, setEnteredPassword) => {
  setEnteredPassword(event.target.value);
};

export const repeatPasswordHandler = (event, setEnteredRepeatPassword) => {
  setEnteredRepeatPassword(event.target.value);
};
