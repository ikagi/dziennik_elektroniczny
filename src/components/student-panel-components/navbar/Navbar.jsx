import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { DropdownAccount } from '../dropdown-account/DropdownAccount';

export const Navbar = () => {
  const [trigger, setTrigger] = useState(false);

  const handleOpenDropdown = () => {
    setTrigger(!trigger);
  };
  
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
            <button className='button' onClick={handleOpenDropdown}>
              Konto
            </button>
          </li>
        </ul>
        <DropdownAccount trigger={trigger} />
      </nav>
    </header>
  );
};
