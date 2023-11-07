import React, { useEffect, useState } from 'react';
import './notes.css';
import { Navbar } from '../navbar/Navbar';
import axios from 'axios';
import Cookies from 'js-cookie';

export const Notes = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const token = Cookies.get('_auth');
    if (token) {
      axios
        .get('http://185.119.210.230:3941/getNotes', { headers: { 'X-Token': token } })
        .then((response) => {
          setDetails(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <div className='page-wrapper'>
      <Navbar />
      <main>
        <div className='notes'>
          <div className='notes__title'>
            <h1>Uwagi</h1>
          </div>
          <ul className='notes__list'>
            {details.map((note, index) => (
              <li key={index} className='notes__item'>
                <h2 className='item__title'>{note.title}</h2>
                <div className='item__message'>{note.message}</div>
                <div className='item__row'>
                  <div className='item__author'>{note.author}</div>
                  <div className='item__date'>{note.date}</div>
                </div>
                
                
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};
