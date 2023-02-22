export const emailchangeHandler = (event, setEnteredEmail) => {
  setEnteredEmail(event.target.value);
};

export const passwordChangeHandler = (event, setEnteredPassword) => {
  setEnteredPassword(event.target.value);
};
export const showpassword = (passwordShown, setPasswordShown) => {
  if (passwordShown) { setPasswordShown(false); } else { setPasswordShown(true); }
};
