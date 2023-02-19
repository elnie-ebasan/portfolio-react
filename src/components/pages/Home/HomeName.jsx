import React, { useState } from 'react';
import HomeMoreButton from './HomeMoreButton';
import './HomeName.css';

const HomeName = () => {
  const [showDialog, setShowDialog] = useState(false);

  function handleHover() {
    setShowDialog(true);
  }

  function handleLeave() {
    setShowDialog(false);
  }

const MoreButton = [
  { name: 'Click for More' }
];

  return (
    <div className='home-name'>
      <h3 className='hello'>Hello! My Name is</h3>
      <h1 className='name' onMouseEnter={handleHover} onMouseLeave={handleLeave}>
        Elnie Ebasan
      </h1>
      <p className='webdev'>Full-Stack Web Developer</p>
      {showDialog && (
        <div className='dialog'>
          <p class='dialogue-box'>
              A Web Development Student who loves and enjoys to create, design, and maintain a website. Who also aims to learn and experience more exciting things of being in the industry.
          </p>
        </div>
      )}
      <div>
        <HomeMoreButton more={MoreButton} />
      </div>
    </div>
  );
};

export default HomeName;
