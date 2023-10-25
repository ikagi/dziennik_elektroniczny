import React from 'react';
import { Timetabel } from '../../../components/student-panel-components/timetabel/Timetabel';
import { Navbar } from '../../../components/student-panel-components/navbar/Navbar';
import './studentpanel.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

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
