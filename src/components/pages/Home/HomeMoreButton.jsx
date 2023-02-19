import React from 'react'
import './HomeMoreButton.css'

const HomeMoreButton = (props) => {
    return (
      <div className='moreButton'>
        <a href="#about"><button className='button'>{props.more[0].name}</button></a>
      </div>
    );
  };
  

export default HomeMoreButton
