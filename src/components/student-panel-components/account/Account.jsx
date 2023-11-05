import React, { useEffect, useState } from 'react';
import './account.css';
import { Navbar } from '../navbar/Navbar';
import axios from 'axios';
import Cookies from 'js-cookie';

export const Account = () => {
  const [userDetails, setUserDetails] = useState([]);
  useEffect(() => {
    const token = Cookies.get('_auth');
    if (token) {
      axios
        .get('http://185.119.210.230:3941/getUserDetails', { headers: { 'X-Token': token } })
        .then((response) => {
          setUserDetails(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  return (
    <>
      <Navbar />
      <div className='account-container'>
        <h2 className='account__title'>Informacje O Koncie</h2>
        {userDetails.map((user, index) => (
          <ul key={index} className='account__list list'>
            <li className='list__item'>
              <span className='account__information'>Nazwa użytkownika:</span> {user.username}
            </li>
            <li className='list__item'>
              <span className='account__information'>Imie i nazwisko:</span> {user.name}{' '}
              {user.secname}
            </li>
            <li className='list__item'>
              <span className='account__information'>Data urodzenia:</span> {user.birthdate}
            </li>
            <li className='list__item'>
              <span className='account__information'>Klasa:</span> {user.class}
            </li>
            <li className='list__item'>
              <span className='account__information'>Wychowawca:</span> {user.educator}
            </li>
            <li className='list__item'>
              <span className='account__information'>Typ konta:</span> {user.account_type}
            </li>
            <li className='list__item'>
              <span className='account__information'>DEV:</span> {user.class_id}
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};
