import React, { useEffect, useState } from 'react';
import './announcements.css';
import { Navbar } from '../navbar/Navbar';
import Cookies from 'js-cookie';
import axios from 'axios';

export const Announcements = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const token = Cookies.get('_auth');
    if (token) {
      axios
        .get('http://185.119.210.230:3941/getAnnouncements', { headers: { 'X-Token': token } })
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
        <div className='announcements'>
          <div className='announcements__title'>
            <h1>Ogłoszenia</h1>
          </div>
          <ul className='announcements__list'>
            {details.map((announcement, index) => (
              <li key={index} className='announcements__item'>
                <h2 className='item__title'>{announcement.title}</h2>
                <div className='item__message'>{announcement.message}</div>
                <div className='item__date'>{announcement.date}</div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};
