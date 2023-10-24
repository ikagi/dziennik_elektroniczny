import React, { useEffect, useState } from 'react';
import './loginform.css';
import { useNavigate } from 'react-router-dom';
import LoginValidation from '../../../scripts/LoginValidation';

export const LoginForm = () => {
  //Add password show state feature
  const [visible, setVisible] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    login: '',
    password: '',
  });
  const [redBorderLogin, setRedBorderLogin] = useState(false);
  const [redBorderPassword, setRedBorderPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = LoginValidation({ login, password });

    if (!validationErrors.login && !validationErrors.password) {
      let loginData = {
        login: login,
        password: password,
        token: import.meta.env.VITE_API_TOKEN,
      };
      fetch('http://185.119.210.230:3941/users', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(loginData),
      })
        .then((response) => response.json())
        .then((data) => {
          if(data === true){
            navigate('/student-panel');
          }
        })
        .catch((error) => console.error(error));
        
    } else {
      setErrors(validationErrors);
    }
  };

  const handleErrorInputBorder = () => {
    setRedBorderLogin(!!errors.login);
    setRedBorderPassword(!!errors.password);
  };

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
    setRedBorderLogin(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setRedBorderPassword(false);
  };

  const handleShowPassword = () => {
    setVisible(!visible);
  };

  useEffect(handleErrorInputBorder, [errors.login, errors.password]);

  return (
    <div className='login__form-container'>
      <form id='login-form' onSubmit={handleSubmit}>
        <div className='form__header'>
          <h2>Zaloguj się</h2>
        </div>
        <div className='form__inputs'>
          <div className='form__input-container'>
            <label htmlFor='login' className='form__input-label'>
              Login
            </label>
            <input
              type='text'
              name='login'
              className='form__input form__input--login'
              onChange={handleLoginChange}
              style={redBorderLogin ? { border: '1px solid #ff0033' } : null}
            />
            <div className='form__login-error error-message'>{errors.login}</div>
          </div>
          <div className='form__input-container'>
            <label htmlFor='password' className='form__input-label'>
              Hasło
            </label>
            <input
              type={visible ? 'text' : 'password'}
              name='password'
              className='form__input form__input-password'
              onChange={handlePasswordChange}
              style={redBorderPassword ? { border: '1px solid #ff0033' } : null}
            />
            <div className='form__password-icon' onClick={handleShowPassword}>
              {visible ? (
                <i className='fa-regular fa-eye'></i>
              ) : (
                <i className='fa-regular fa-eye-slash'></i>
              )}
            </div>
            <div className='form__password-error error-message'>{errors.password}</div>
          </div>
        </div>
        <div className='form__submit-container'>
          <button type='submit' id='form__submit-button'>
            Zaloguj
            <i className='fa-solid fa-arrow-right arrow-right'></i>
          </button>
        </div>
      </form>
    </div>
  );
};
