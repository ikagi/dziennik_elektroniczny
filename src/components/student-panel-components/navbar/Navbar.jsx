import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export const Navbar = () => {
  const handleLogOut = () => {
    document.cookie = '_auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    window.location.reload();
  };

  return (
    <header className='student-panel__header'>
      <nav className='student-panel__nav'>
        <ul className='student-panel__list list'>
          <li className='link'>
            <span className='link-text'>
              <Link to='/student-panel'>Plan lekcji</Link>
            </span>
          </li>
          <li className='link'>
            <span className='link-text'>
              <Link to='/student-panel/grades'>Oceny</Link>
            </span>
          </li>
          <li className='link'>
            <span className='link-text'>
              <Link to='/student-panel/announcements'>Ogłoszenia</Link>
            </span>
          </li>
          <li className='link dropdown-trigger'>
            <span className='link-text'>Konto</span>
            <ul className='dropdown'>
              <li>
                <Link to='/student-panel/account' className='dropdown-link'>
                  Informacje
                </Link>
              </li>
              <li>
                <button className='button dropdown-link' onClick={handleLogOut}>
                  Wyloguj
                </button>
              </li>
            </ul>
          </li>

        </ul>
      </nav>
    </header>
  );
};
