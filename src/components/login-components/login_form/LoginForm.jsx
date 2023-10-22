import React, { useEffect, useState } from 'react';
import './loginform.css';
import { useNavigate } from 'react-router-dom';
import LoginValidation from '../../../scipts/LoginValidation';

export const LoginForm = () => {
  const [visible, setVisible] = useState(false); //Used to show/hide password feature

  const [userInput, setUserInput] = useState({ //stores userinput from form
    login: '',
    password: ''
  });

  const [errors, setErrors] = useState(''); // Used to showing errors on page

  const navigate = useNavigate();

  const handleInput = (e) => {
    setUserInput(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(LoginValidation(userInput));  
    //navigate('/student-panel');
  };
  
  useEffect( () => {
    console.error(errors.password);
    console.error(errors.login);
    console.log("Login: " + userInput.login);
    console.log("Haslo: " + userInput.password);
  }, [errors]);



  const handleShowPassword = () => {
    setVisible(!visible);
  };

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
              onChange={(e) => handleInput()}
            />
          </div>
          <div className='form__input-container'>
            <label htmlFor='password' className='form__input-label'>
              Hasło
            </label>
            <input
              type={visible ? 'text' : 'password'}
              name='password'
              className='form__input form__input-password'
              onChange={(e) => handleInput()}
            />
            <div className='form__password-icon' onClick={handleShowPassword}>
              {visible ? (
                <i className='fa-regular fa-eye'></i>
              ) : (
                <i className='fa-regular fa-eye-slash'></i>
              )}
            </div>
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
