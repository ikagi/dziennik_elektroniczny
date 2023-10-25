import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export const Navbar = () => {
  return (
    <header className='student-panel__header'>
      <nav className='student-panel__nav'>
        <ul className='student-panel__list list'>
          <li className='link'>
            <Link to='/student-panel'>Plan lekcji</Link>
          </li>
          <li className='link'>
            <Link to='/student-panel/grades'>Oceny</Link>
          </li>
          <li className='link'>
            <Link to='/student-panel/announcements'>Ogłoszenia</Link>
          </li>
          <li className='link'>
            <Link to='/student-panel/account'>Konto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
