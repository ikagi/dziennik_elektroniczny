import React from 'react';
import './errorpage.css';
import Error404 from '../../assets/error.svg';

export const ErrorPage = () => {
  return (
    <>
      <div className='error__icon-container'>
        <img className='error__icon' src={Error404} alt='' />
      </div>
      <div className='error-container'>
        <div className='error__title-container'>
          <p className='error__title'>Error 404</p>
        </div>
        <div className='error__message-container'>
          <p className='error__message'>Przepraszamy, ale strona o danym adresie URL nie istnieje</p>
        </div>
      </div>
    </>
  );
};
