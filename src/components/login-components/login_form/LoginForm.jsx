import React, { useState } from 'react';
import './loginform.css';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const [visible, setVisible] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login: " + login);
    console.log("Haslo: " + password);
    navigate('/student-panel');
  };

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
              onChange={(e) => setLogin(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className='form__password-icon' onClick={handleShowPassword}>
              {visible ? (
                <i class='fa-regular fa-eye'></i>
              ) : (
                <i class='fa-regular fa-eye-slash'></i>
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
