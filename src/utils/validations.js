const fieldRequired = (field, label) => {
  if (field.trim() === '') {
    return `${label} is required`;
  }
};

const phoneValidation = phone => {
  if (!/^[2-9]\d{9}$/.test(phone)) {
    return 'Enter a valid phone';
  }
};

const emailValidation = email => {
  if (
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    return null;
  }

  return 'Enter a valid email';
};

export { fieldRequired, phoneValidation, emailValidation };
