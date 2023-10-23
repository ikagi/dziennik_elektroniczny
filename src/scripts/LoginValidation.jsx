function LoginValidation(userInput) {
  let errors = {
    login: '',
    password: '',
  };

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  if (userInput.login === '') {
    errors.login = 'Login nie może być pusty';
  }

  if (userInput.password === '') {
    errors.password = 'Hasło nie może być puste';
  } else if (!passwordRegex.test(userInput.password)) {
    console.log(passwordRegex.test(userInput.password));
    errors.password = 'Niepoprawne hasło';
  }

  return errors;
}

export default LoginValidation;
