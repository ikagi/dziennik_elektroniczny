import React, { useEffect, useState } from 'react';
import './grades.css';
import { Navbar } from '../navbar/Navbar';
import { PopupGrades } from '../popup/PopupGrades';
import Cookies from 'js-cookie';
import axios from 'axios';

export const Grades = () => {
  const [selectedPopup, setSelectedPopup] = useState(null);
  const [details, setDetails] = useState([]);
  const [avg, setAvg] = useState(''); //Srednia wazona przechowywana w zmiennej avg

  const handlePopupClick = (popupId) => {
    setSelectedPopup(popupId);
  };

  const closePopup = () => {
    setSelectedPopup(null);
  };

  useEffect(() => {
    const token = Cookies.get('_auth');
    if (token) {
      axios
        .get('http://185.119.210.230:3941/getGrades', { headers: { 'X-Token': token } })
        .then((response) => {
          setDetails(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
      axios
        .get('http://185.119.210.230:3941/getAvg', { headers: { 'X-Token': token } })
        .then((response) => {
          setAvg(JSON.stringify(response.data));
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const transformedData = details.reduce((result, item) => {
    const subjectName = item.subject_name;
    const existingSubject = result.find((subject) => subject.lesson === subjectName);

    if (existingSubject) {
      existingSubject.grades.push({
        grade: item.grade,
        weight: item.weight,
        date: item.date,
        comment: item.comment,
      });
    } else {
      result.push({
        lesson: subjectName,
        grades: [
          {
            grade: item.grade,
            weight: item.weight,
            date: item.date,
            comment: item.comment,
          },
        ],
      });
    }

    return result;
  }, []);

  return (
    <div className='page-wrapper'>
      <Navbar />
      <main className='main'>
        <div className='lessons-container'>
          {transformedData.map((subject, index) => {
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
          <PopupGrades
            trigger={true}
            setTrigger={closePopup}
            subject={transformedData[selectedPopup]}
          />
        )}
      </main>
    </div>
  );
};
