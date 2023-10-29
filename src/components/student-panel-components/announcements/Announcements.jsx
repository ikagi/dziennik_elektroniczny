import React, {useEffect, useState} from 'react';
import './announcements.css';
import { Navbar } from '../navbar/Navbar';
import Cookies from 'js-cookie';
import axios from 'axios';

export const Announcements = () => {

  const [details, setDetails] = useState([]);

  useEffect(() => {
    const token = Cookies.get('_auth');
    if (token) {
        axios.get("http://185.119.210.230:3941/getAnnouncements", { headers: { 'X-Token': token } })
            .then((response) => {
              setDetails(response.data);
            })
            .catch(err => {
              console.log(err);
            });
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className='test'>
        <ul>
          {details.map((announcement, index) => (
            <li key={index}>
              <h3>{announcement.title}</h3>
              <div>Wiadomość: {announcement.message}</div>
              <div>Data: {announcement.date}</div>
            </li>
          ))}
        </ul>
      </div>
      
    </>
  );
};
