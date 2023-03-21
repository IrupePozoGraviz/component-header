import React from 'react';

import './header.css'

export const Header = ({ title, link, link1, link2, link3 }) => {
  const headerStyle = {
    background: '#151414',
    padding: '10px',
    borderBottom: '1px solid #ccc'
  }

  return (
    <header style={headerStyle}>
      <h1>{title}</h1>
      <nav>
        <ul>
          <li><a>{link}</a></li>
          <li><a>{link1}</a></li>
          <li><a>{link2}</a></li>
          <li><a>{link3}</a></li>
        </ul>
      </nav>
    </header>
  );
}

