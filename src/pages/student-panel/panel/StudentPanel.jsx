import React from 'react';
import { Timetabel } from '../../../components/student-panel-components/timetabel/Timetabel';
import { Navbar } from '../../../components/student-panel-components/navbar/Navbar';
import './studentpanel.css';

export const StudentPanel = () => {
  return (
    <>
      <Navbar />
      <main>
        <Timetabel />
      </main>
    </>
  );
};
