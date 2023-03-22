import React from 'react';
import './footer.css'
import shapebg from '../../../assets/Home/shape-bg.png';

// No usar require, mejor usar import
export default function Footer() {
  return (
    <div className='footer-container' >
        <div className='footer-parent' >
            {/* <img src={ require( '../../../assets/Home/shape-pg.png' ) } alt="no internet connection" /> */}
            <img src={ shapebg } alt="no internet connection" />
        </div>
    </div>
  )
}
