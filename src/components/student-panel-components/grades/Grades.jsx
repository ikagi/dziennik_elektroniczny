import React, { useState } from 'react';
import './grades.css';
import { Navbar } from '../navbar/Navbar';
import { Popup } from '../popup/Popup';
import grades from '../../../data/grades/grades.json';

export const Grades = () => {
  const [selectedPopup, setSelectedPopup] = useState(null);

  const handlePopupClick = (popupId) => {
    setSelectedPopup(popupId);
  };

  const closePopup = () => {
    setSelectedPopup(null);
  };

  return (
    <div className='page-wrapper'>
      <Navbar />
      <main className='main'>
        <div className='lessons-container'>
          {grades.grades.map((subject, index) => {
            const gradesString = subject.grades.map((grade) => grade.grade).join(', ');
            return (
              <button
                className='lesson__button'
                key={index}
                onClick={() => handlePopupClick(index)}
              >
                <h2 className='lesson__title'>{subject.lesson}</h2>
                <span className='lesson__grades'>{gradesString}</span>
              </button>
            );
          })}
        </div>
        {selectedPopup !== null && (
          <Popup trigger={true} setTrigger={closePopup} subject={grades.grades[selectedPopup]} />
        )}
      </main>
    </div>
  );
};
