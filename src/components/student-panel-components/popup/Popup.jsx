import React from 'react';
import './popup.css';

export const Popup = ({ trigger, setTrigger, subject }) => {
  const { lesson, grades } = subject;

  return trigger ? (
    <div className='popup'>
      <div className='popup__inner'>
        <button className='popup__close-button' onClick={() => setTrigger(false)}>
          <i className='fa-solid fa-x'></i>
        </button>
        <h2 className='popup__lesson'>{lesson}</h2>
        <ul className='popup__grades'>
          {grades.map((grade, index) => {
            return (
              <li key={index} className='popup__grade'>
                <p className='grade__item'>{`Ocena: ${grade.grade}`}</p>
                <p className='grade__item'>{`Waga: ${grade.weight}`}</p>
                <p className='grade__item'>{`Komentarz: ${grade.comment}`}</p>
                <p className='grade__item'>{`Data : ${grade.date}`}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  ) : (
    ''
  );
};
