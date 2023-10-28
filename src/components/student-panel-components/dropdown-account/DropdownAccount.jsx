import React from 'react';
import { Link } from 'react-router-dom';
import './dropdown-account.css';

export const DropdownAccount = ({ trigger }) => {
  const handleLogOut = () => {
    document.cookie = '_auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = '_auth_username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    window.location.reload();
  };

  return trigger ? (
    <div className='dropdown__container'>
      <ul className='dropdown__list list'>
        <li className='dropdown__option dropdown__option--link'>
          <Link to='/student-panel/account'>Informacje</Link>
        </li>
        <li>
          <button className='dropdown__option dropdown__option--button' onClick={handleLogOut}>
            Wyloguj
          </button>
        </li>
      </ul>
    </div>
  ) : null;
};
