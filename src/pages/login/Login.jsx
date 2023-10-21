import React from 'react';
import { LoginForm } from '../../components/login-components/login_form/LoginForm';
import './Login.css';

export const Login = () => {
  return (
    <div className='login-wrapper'>
      <div className='login__title-container'>
        <h1 className='login__title'>Dziennik Elektroniczny</h1>
      </div>
      <div className='login-container'>
        <LoginForm />
      </div>
    </div>
  );
};
