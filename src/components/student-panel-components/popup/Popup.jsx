import React from 'react';
import './popup.css';

export const Popup = (props) => {
  return props.trigger ? (
    <div className='popup'>
      <div className='popup__inner'>
        <button className='popup__close-button' onClick={() => props.setTrigger(false)}>
          Close
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ''
  );
};
