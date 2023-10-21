import React from 'react';
import { Timetabel } from '../../../components/student-panel-components/timetabel/Timetabel';
import './studentpanel.css';

export const StudentPanel = () => {
  return (
    <>
      <header className='student-panel__header'>
        <nav className='student-panel__nav'>
          <ul className='student-panel__list list'>
            <li className='link'>Plan lekcji</li>
            <li className='link'>Oceny</li>
            <li className='link'>Ogłoszenia</li>
            <li className='link'>Wiadomości</li>
          </ul>
        </nav>
      </header>
      <main>
        <Timetabel />
      </main>
    </>
  );
};
