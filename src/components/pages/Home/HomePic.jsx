import React from 'react'
import './HomePic.css'
import pic from '../../UI/me-pic.jpg'

const HomePic = () => {
  return (
    <div>
      <img src={pic} alt="pic" style={{width: '500px'}} className='pic' />
    </div>
  )
}

export default HomePic
