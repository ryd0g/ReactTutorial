import React from 'react';
import './Footer.css';

function Footer() {
  const date = new Date();
  return (
    <footer className='Footer'>
      <p>Ryan Lee © {date.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
