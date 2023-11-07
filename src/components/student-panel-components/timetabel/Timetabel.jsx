import React, { useState, useEffect } from 'react';
import './timetabel.css';
import axios from 'axios';
import Cookies from 'js-cookie';

export const Timetabel = () => {
  const lessonNumbers = Array.from({ length: 9 }, (_, index) => index + 1);
  const days = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek'];
  const [timetableData, settimetableData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const token = Cookies.get('_auth');
    if (token) {
      axios
        .get('http://185.119.210.230:3941/getTimeTable', { headers: { 'X-Token': token } })
        .then((response) => {
          settimetableData(JSON.parse(response.data));
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(timetableData);
    }
  }, []);
  return (
    <div className='timetable-wrapper'>
      <h1 className='timetable__title'>Plan Lekcji</h1>
      <div className='timetable'>
        <div className='timetable__lesson-numbers'>
          <div className='label lesson-number-label'>Nr lekcji</div>
          {lessonNumbers.map((number) => (
            <div key={number} className='timetable__lesson-number'>
              {number}
            </div>
          ))}
        </div>
        <div className='timetable__lesson-time-container'>
          <div className='label lesson-time-label'>Godziny</div>
          <div className='timetable__lesson-time'>7:15 - 8:00</div>
          <div className='timetable__lesson-time'>8:10 - 8:55</div>
          <div className='timetable__lesson-time'>9:05 - 9:50</div>
          <div className='timetable__lesson-time'>10:00 - 10:45</div>
          <div className='timetable__lesson-time'>11:00 - 11:45</div>
          <div className='timetable__lesson-time'>11:55 - 12:40</div>
          <div className='timetable__lesson-time'>12:50 - 13:35</div>
          <div className='timetable__lesson-time'>13:40 - 14:25</div>
          <div className='timetable__lesson-time'>14:35 - 15:15</div>
        </div>
        {days.map((day) => (
          <div className='timetable__day-wrapper' key={day}>
            <div className='timetable__day'>{day}</div>
            {isLoading ? (
              <div className='loading-message'>Loading...</div>
            ) : (
              timetableData[day].map((lesson, index) => (
                <div key={index} className='timetable__lesson'>
                  {lesson}
                </div>
              ))
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
