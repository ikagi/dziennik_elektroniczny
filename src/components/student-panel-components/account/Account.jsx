import React, { useEffect, useState } from 'react'
import './account.css';
import { Navbar } from '../navbar/Navbar';
import axios from 'axios';
import Cookies from 'js-cookie';

export const Account = () => {

    return (
        <>
            <Navbar />
            <div className='test'>
                <h2>Account details</h2>
                <ul>
                    <li>test</li>
                </ul>
            </div>
        </>
    );
};