import React from 'react'
import About from '../About/About'
import './Home.css'
import HomeName from './HomeName'
import HomePic from './HomePic'

const Home = () => {
  return (
    <div className='home' id='home'>
        <div className="grid-item">
            <HomeName />
        </div>
        <div className="grid-item">
            <HomePic />
        </div>
        <div>
          <About />
        </div>
    </div>
    
  )
}

export default Home
