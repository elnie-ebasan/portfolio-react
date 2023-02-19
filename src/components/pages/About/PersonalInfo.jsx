import React from 'react'
import './PersonalInfo.css'

const PersonalInfo = (props) => {
  const { personalInfo } = props;

  return (
    <div className='info-section'>
      <h3>Personal Info</h3>
      <div className='personal-info-body'>

        <ul style={{ listStyleType: 'none' }}>
          {personalInfo.map((item, index) => (
            <li key={index}>
            <span className="label">{Object.keys(item)}:</span> 
            <span className="data">{Array.isArray(Object.values(item)[0]) ? Object.values(item)[0].join(', ') : Object.values(item)[0]}</span>
            </li>
          ))}
        </ul>
        
      </div>
    </div>
  )
}

export default PersonalInfo