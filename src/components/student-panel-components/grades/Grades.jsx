import React, { useState } from 'react';
import './grades.css';
import { Navbar } from '../navbar/Navbar';
import { Popup } from '../popup/Popup';

export const Grades = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <Navbar />
      <main className='main'>
        <button onClick={() => setButtonPopup(true)}>Popup</button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h2>jakies oceny</h2>
          <p>testaa</p>
        </Popup>
      </main>
    </>
  );
};
