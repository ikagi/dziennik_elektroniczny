import React from 'react';
import './timetabel.css';

export const Timetabel = () => {
  const lessonNumbers = Array.from({ length: 8 }, (_, index) => index + 1);

  return (
    <div className='timetable-wrapper'>
      <h1 className='timetable__title'>Plan Lekcji</h1>
      <div className='timetable'>
        <div className='timetable__lesson-numbers'>
          <div className='label'>Nr lekcji</div>
          {lessonNumbers.map((number) => (
            <div key={number} className='timetable__lesson-number'>
              {number}
            </div>
          ))}
        </div>
        <div className='timetable__lesson-time-container'>
          <div className='label'>Godziny</div>
          <div className='timetable__lesson-time'>7:15 - 8:00</div>
          <div className='timetable__lesson-time'>8:10 - 8:55</div>
          <div className='timetable__lesson-time'>9:05 - 9:50</div>
          <div className='timetable__lesson-time'>10:00 - 10:45</div>
          <div className='timetable__lesson-time'>11:00 - 11:45</div>
          <div className='timetable__lesson-time'>11:55 - 12:40</div>
          <div className='timetable__lesson-time'>12:50 - 13:35</div>
          <div className='timetable__lesson-time'>13:40 - 14:25</div>
        </div>
        <div className='timetable__day-wrapper'>
          <div className='timetable__day'>Poniedziałek</div>
          <div className='timetable__lesson'>Matematyka</div>
          <div className='timetable__lesson'>Polski</div>
          <div className='timetable__lesson'>Chemia</div>
          <div className='timetable__lesson'>Historia</div>
          <div className='timetable__lesson'>W-F</div>
          <div className='timetable__lesson'>Religia</div>
          <div className='timetable__lesson'></div>
          <div className='timetable__lesson'></div>
        </div>
        <div className='timetable__day-wrapper'>
          <div className='timetable__day'>Wtorek</div>
          <div className='timetable__lesson'>Fizyka</div>
          <div className='timetable__lesson'>Angielski</div>
          <div className='timetable__lesson'>WOS</div>
          <div className='timetable__lesson'>Biologia</div>
          <div className='timetable__lesson'>Informatyka</div>
          <div className='timetable__lesson'>Plastyka</div>
          <div className='timetable__lesson'>Matematyka</div>
          <div className='timetable__lesson'></div>
        </div>
        <div className='timetable__day-wrapper'>
          <div className='timetable__day'>Środa</div>
          <div className='timetable__lesson'>Chemia</div>
          <div className='timetable__lesson'>Historia</div>
          <div className='timetable__lesson'>Polski</div>
          <div className='timetable__lesson'>W-F</div>
          <div className='timetable__lesson'>Religia</div>
          <div className='timetable__lesson'>Fizyka</div>
          <div className='timetable__lesson'>Angielski</div>
          <div className='timetable__lesson'>WOS</div>
        </div>
        <div className='timetable__day-wrapper'>
          <div className='timetable__day'>Czwartek</div>
          <div className='timetable__lesson'>Biologia</div>
          <div className='timetable__lesson'>Informatyka</div>
          <div className='timetable__lesson'>Plastyka</div>
          <div className='timetable__lesson'>Matematyka</div>
          <div className='timetable__lesson'>Polski</div>
          <div className='timetable__lesson'>Chemia</div>
          <div className='timetable__lesson'>Historia</div>
          <div className='timetable__lesson'>W-F</div>
        </div>
        <div className='timetable__day-wrapper'>
          <div className='timetable__day'>Piątek</div>
          <div className='timetable__lesson'>Informatyka</div>
          <div className='timetable__lesson'>Polski</div>
          <div className='timetable__lesson'>Chemia</div>
          <div className='timetable__lesson'>Historia</div>
          <div className='timetable__lesson'>Plastyka</div>
          <div className='timetable__lesson'>Religia</div>
          <div className='timetable__lesson'>W-F</div>
          <div className='timetable__lesson'></div>
        </div>
      </div>
    </div>
  );
};
